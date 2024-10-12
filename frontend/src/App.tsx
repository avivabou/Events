import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import UsersViewer from './Pages/UsersViewer/UsersViewer';
import { WorkStatus } from '@employee-statuses/shared';

const App = () => {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/users');
      const usersWithId = response.data.map((user: any) => ({
        ...user,
        id: user._id,
      }));
      setUsers(usersWithId);
    };
    fetchData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await axios.put(`http://localhost:8000/users/${id}`, { status: newStatus });
      setUsers((prevUsers: any[]) => 
        prevUsers.map(user => 
          user.id === id ? { ...user, status: newStatus } : user
        )
      );
    } catch (error) {
      console.error('Failed to update user status', error);
    }
  };

  const createNewUser = async (name: string, status: WorkStatus, img: string) => {
    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, status, img }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create new user');
      }
      const newUser = await response.json();
      setUsers([...users, newUser])
      return newUser;
    } catch (error) {
      console.error('Error creating new user:', error);
    }
  };

  const deleteUser = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`); 
      setUsers(users.filter((user: any) => user.id !== id))
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className='app'>
      <UsersViewer users={users} updateUserStatus={handleStatusChange} createNewUser={createNewUser} deleteUser={deleteUser}/>
    </div>
  );
};

export default App;
