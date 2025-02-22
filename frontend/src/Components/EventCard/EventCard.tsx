import React from 'react';
import './EventCard.css';
import type { TicketType } from "@tickets/shared";
import AvailableTicketsDropdown from '../AvailableTicketsDropdown/AvailableTicketsDropdown';

export interface EventCardProps {
  id: string;
  name: string;
  imageSource: string;
  description: string;
  availableStatuses: Record<TicketType,number>;
  date: string;
  onTicketSelect: (id: string, ticketType: TicketType) => void;
}

const EventCard: React.FC<EventCardProps> = React.memo(({
  id,
  name,
  availableStatuses,
  imageSource,
  description,
  date,
  onTicketSelect,
}) => {
  return (
    <div className="event-card">
      <div className="image-container">
        <img src={imageSource} alt={`${id} icon`} className="event-image" />
      </div>
      <div className="event-info">
        <div className='header-container'>
          <div className="event-name">{name}</div>
          <div className="event-date">{date}</div>
        </div>
        <div className="event-description">{description}</div>
        <div className='available-ticket-types-dropdown-container'>
          <AvailableTicketsDropdown 
            id={id} 
            availableTypes={availableStatuses} 
            imageSource={imageSource} 
            onTicketSelect={onTicketSelect} 
          />
        </div>
      </div>
    </div>
  );
});

export default EventCard;
