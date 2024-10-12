import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { WORK_STATUSES, WorkStatus } from '@employee-statuses/shared';
import './CreateUserModal.css';

interface CreateUserModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (name: string, status: WorkStatus, img: string) => void; 
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ open, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<WorkStatus>(WORK_STATUSES[0]);
  const [img, setImg] = useState('');

  const handleSave = () => {
    onSave(name, status, img);
    handleClose(); 
  };

  const handleClose = () => {
    setName('');
    setStatus(WORK_STATUSES[0]);  
    setImg('');  
    onClose(); 
  };

  return (
    <Modal open={open} onClose={onClose} className="create-user-modal">
      <Box className="modal-box">
        <Typography variant="h6" component="h2">
          Create New User
        </Typography>
        <hr />
        <TextField
          label="User Name:"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant='standard'
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="status-title" variant="standard">Status:</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value as WorkStatus)}
            labelId='status-title'
            variant='standard'
          >
            {WORK_STATUSES.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Image URL:"
          fullWidth
          value={img}
          onChange={(e) => setImg(e.target.value)}
          margin="normal"
          variant='standard'
        />
        <div className="modal-buttons">
          <Button variant="contained" onClick={handleSave} disabled={!name || !img}>
            Save
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
