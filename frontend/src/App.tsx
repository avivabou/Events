import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import axios from 'axios';
import './App.css';
import EventsViewer from './Pages/EventsViewer/EventsViewer';
import { EventViewingMode, VIEWING_MODES } from './Pages/EventsViewer/ViewingModes';

const App = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [_, setPage] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const hasFetchedFirstPage = useRef(false);

  const loadPage = useCallback(async (pageIndex: number) => {
    if (isFetching || !hasMore) return;
    setIsFetching(true);
    try {
      const response = await axios.get(`http://localhost:8000/events/page?page=${pageIndex}`);
      const newEvents = response.data.map((event: any) => ({
        ...event,
        date: new Date(event.date),
        id: event._id,
      }));
      if (newEvents.length === 0) {
        setHasMore(false);
      } else {
        setEvents((prevEvents) => [...prevEvents, ...newEvents]);
      }
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setIsFetching(false);
    }
  }, [isFetching, hasMore]);

  useEffect(() => {
    if (!hasFetchedFirstPage.current) {
      hasFetchedFirstPage.current = true;
      loadPage(0);
    }
  }, [loadPage]);

  const loadMoreEvents = useCallback(() => {
    if (isFetching || !hasMore) return;
    setPage((prevPage) => {
      const nextPage = prevPage + 1;
      loadPage(nextPage);
      return nextPage;
    });
  }, [isFetching, hasMore, loadPage]);

  const viewingMode: EventViewingMode = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('userType') === 'tourist' ? VIEWING_MODES.LIST : VIEWING_MODES.GRID3;
  }, []);

  return (
    <div className="app">
      <EventsViewer events={events} viewingMode={viewingMode} loadMoreEvents={loadMoreEvents} />
    </div>
  );
};

export default App;
