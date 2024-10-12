import React from 'react';
import StatusItem from './StatusItem';
import './UserCard.css';
import type { WorkStatus } from "@employee-statuses/shared";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface UserCardProps {
  id: string;
  name: string;
  currentStatus: WorkStatus;
  availableStatuses: WorkStatus[];
  imageSource: string;
  onStatusChange: (id: string, status: WorkStatus) => void;
  deleteUser: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = React.memo(({
  id,
  name,
  currentStatus,
  availableStatuses,
  imageSource,
  onStatusChange,
  deleteUser,
}) => {
  const handleStatusChange = (event: SelectChangeEvent) => {
    const status = event.target.value as WorkStatus;
    onStatusChange(id, status);
  };

  return (
    <div className="user-card">
      <div className="image-container">
        <img src={imageSource} alt={`${id} icon`} className="user-image" />
      </div>
      <div className="user-info">
        <div className="user-name">{name}</div>
        <Select
          value={currentStatus}
          onChange={handleStatusChange}
          variant='standard'
          className="status-dropdown"
        >
          {availableStatuses.map((status) => (
            <MenuItem key={status} value={status}>
              <StatusItem status={status} />
            </MenuItem>
          ))}
        </Select>
        <button 
          className="delete-button" 
          onClick={() => deleteUser(id)}
        >
          X
        </button>
      </div>
    </div>
  );
});

export default UserCard;
