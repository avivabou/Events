import React from 'react';
import TicketTypeItem from './TicketTypeItem/TicketTypeItem';
import type { TicketType } from "@tickets/shared";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './AvailableTicketsDropdown.css'

interface EventCardProps {
  id: string;
  availableTypes: Record<TicketType, number>;
  imageSource: string;
  onTicketSelect: (id: string, ticketType: TicketType) => void;
}

const AvailableTicketsDropdown: React.FC<EventCardProps> = React.memo(({
    id,
    availableTypes,
    onTicketSelect,
  }) => {
    const handleStatusChange = (event: SelectChangeEvent) => {
      const ticketType = event.target.value as TicketType;
      onTicketSelect(id, ticketType);
    };
  
    return (
      <Select
        value=""
        onChange={handleStatusChange}
        variant="standard"
        className="available-ticket-types-dropdown"
        displayEmpty
      >
        <MenuItem value="" disabled>
          Available tickets
        </MenuItem>
        {Object.entries(availableTypes).map(([ticketType, count]) => (
          <MenuItem key={ticketType} value={ticketType}>
            <TicketTypeItem ticketType={ticketType as TicketType} count={count} />
          </MenuItem>
        ))}
      </Select>
    );
  });
  

export default AvailableTicketsDropdown;
