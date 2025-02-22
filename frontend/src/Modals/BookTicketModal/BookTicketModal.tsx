import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { Event, TicketType } from '@tickets/shared';
import './BookTicketModal.css';

interface BookTicketModalProps {
  event?: Event;
  ticketType?: TicketType;
  onClose: () => void;
}

const BookTicketModal: React.FC<BookTicketModalProps> = ({ event, ticketType, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleClose = () => {
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <Modal open={Boolean(event && ticketType)} onClose={onClose} className="book-ticket-modal">
      <Box className="modal-box">
        <Typography variant="h6" component="h2">
          {`${event?.name}: ${ticketType} Ticket`}
        </Typography>
        <hr />
        <div className="image-container">
        <img src={event?.image} alt={`${event?.id} icon`} className="book-ticket-image" />
        <hr />
      </div>
        {event?.description}
        <TextField
          label="Full Name:"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          variant="standard"
        />
        <TextField
          label="Email:"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          variant="standard"
          error={email !== '' && !isValidEmail(email)}
          helperText={email !== '' && !isValidEmail(email) ? 'Enter a valid email' : ''}
        />
        <div className="modal-buttons">
          <Button variant="contained" onClick={handleClose} disabled={!name || !isValidEmail(email)}>
            Book
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default BookTicketModal;
