import * as React from 'react';
import { User, WORK_STATUSES, WorkStatus } from '@employee-statuses/shared';
import FilterBar from '../../Components/FilterBar/FilterBar';
import CardsCollection from '../../Components/CardsCollection/CardCollection';
import UserCard from '../../Components/UserCard/UserCard';
import './UsersViewer.css';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateUserModal from '../../Modals/CreateUserModal/CreateUserModal';

interface UsersViewerProps {
  users: User[];
  updateUserStatus: (id: string, newStatus: string) => void;
  createNewUser: (name: string, status: WorkStatus, img: string) => void;
  deleteUser: (id: string) => void;
}

const UsersViewer: React.FC<UsersViewerProps> = ({ users, updateUserStatus, createNewUser, deleteUser }) => {
  const [usersToPresent, setUsersToPresent] = React.useState<User[]>(users);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='users-viewer'>
      <div className="top-bar">
      <Button className="create-button" variant="contained" endIcon={<AddIcon />} onClick={handleOpenModal}>
        Create
      </Button>
        <FilterBar allUsers={users} onFilterAction={setUsersToPresent} />
      </div>
      <CardsCollection
        data={usersToPresent}
        injectData={(user: any) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            currentStatus={user.status}
            imageSource={user.img}
            availableStatuses={[...WORK_STATUSES]}
            onStatusChange={updateUserStatus}
            deleteUser={deleteUser}
          />
        )}
      />
    <CreateUserModal 
        open={modalOpen}
        onClose={handleCloseModal}
        onSave={createNewUser}
      />
    </div>
  );
};

export default UsersViewer;
