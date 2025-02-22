import React from 'react';
import {TICKET_TYPE_COLORS, type TicketType} from "@tickets/shared";
import "./TicketTypeItem.css"

interface TicketTypeProps {
  ticketType: TicketType;
  count: number;
}

const TicketTypeItem: React.FC<TicketTypeProps> = ({ ticketType, count }) => {
  const color = TICKET_TYPE_COLORS[ticketType] || 'gray';

  return (
    <div className="ticket-type-item-container">
      <div className="ticket-type-item-icon"
        style={{border: `3px solid ${color}`}}
      />
      <span>{ticketType}</span>
      <span className='ticket-type-item-count'>
        {count} left
      </span>
    </div>
  );
};

export default TicketTypeItem;
