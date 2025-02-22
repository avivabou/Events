import * as React from 'react';
import { Event, TicketType } from '@tickets/shared';
import FilterBar from '../../Components/FilterBar/FilterBar';
import CollectionGrid from '../../Components/CollectionGrid/CollectionGrid';
import './EventsViewer.css';
import BookTicketModal from '../../Modals/BookTicketModal/BookTicketModal';
import getEventsViewingModes, { EventViewingMode } from './ViewingModes';
import { useCallback, useMemo, useEffect } from 'react';

interface EventsViewerProps {
  events: Event[];
  loadMoreEvents: () => void;
  viewingMode?: EventViewingMode;
}

const EventsViewer: React.FC<EventsViewerProps> = ({ events, viewingMode, loadMoreEvents }) => {
  const [eventsToPresent, setEventsToPresent] = React.useState<Event[]>(events);
  const [modalParams, setModalParams] = React.useState<[Event, TicketType] | null>(null);

  const handleOpenModal = useCallback((id: string, ticket: TicketType) => {
    const selectedEvent = events.find((event) => event.id === id);
    if (selectedEvent) {
      setModalParams([selectedEvent, ticket]);
    }
  }, [events]);

  const handleCloseModal = useCallback(() => {
    setModalParams(null);
  }, []);

  const viewingModes = useMemo(
    () => getEventsViewingModes({ onTicketSelect: handleOpenModal }),
    [handleOpenModal]
  );
  const selectedViewingMode = viewingModes[viewingMode ?? 'list'];

  const handleWindowScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= 3*scrollHeight/5) {
      loadMoreEvents();
    }
  }, [loadMoreEvents]);

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [handleWindowScroll]);

  return (
    <div className='events-viewer'>
      <div className="top-bar">
        <FilterBar allEvents={events} onFilterAction={setEventsToPresent} />
      </div>
      <div className="content-container">
        <CollectionGrid
          data={eventsToPresent}
          itemsInARow={selectedViewingMode.itemsInARow}
          injectData={selectedViewingMode.injectData}
        />
      </div>
      <BookTicketModal 
        event={modalParams?.[0]}
        ticketType={modalParams?.[1]}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EventsViewer;
