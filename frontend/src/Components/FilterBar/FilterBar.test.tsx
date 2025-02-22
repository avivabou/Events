import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';
import { Event } from '@tickets/shared';

const mockOnFilterAction = jest.fn();
const mockEvents: Event[] = [
  {
      id: '1',
      name: 'Concert A',
      description: 'Live music',
      date: new Date('2025-01-01'),
      availableTickets: {
          Normal: 20, VIP: 10,
          'Golden Ring': 0,
          Accessible: 0
      },
      image: '',
      shortDescription: ''
  },
  {
      id: '2',
      name: 'Concert B',
      description: 'Rock festival',
      date: new Date('2025-02-01'),
      availableTickets: {
          Normal: 15,
          'Golden Ring': 0,
          VIP: 0,
          Accessible: 0
      },
      image: '',
      shortDescription: ''
  },
  {
      id: '3',
      name: 'Comedy Show',
      description: 'Stand-up comedy night',
      date: new Date('2025-03-01'),
      availableTickets: {
          Normal: 5,
          'Golden Ring': 0,
          VIP: 0,
          Accessible: 0
      },
      image: '',
      shortDescription: ''
  },
];

const transformedEvents = mockEvents.map(event => ({
  ...event,
  'ticket type': Object.keys(event.availableTickets),
}));

describe('FilterBar', () => {
  beforeEach(() => {
    mockOnFilterAction.mockClear();
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<FilterBar allEvents={mockEvents} onFilterAction={mockOnFilterAction} />);
  });

  test('renders FilterBar correctly', () => {
    expect(screen.getByPlaceholderText('Type to search')).toBeInTheDocument();
  });

  test('filters events based on search input', () => {
    fireEvent.change(screen.getByPlaceholderText('Type to search'), { target: { value: 'Concert' } });

    expect(mockOnFilterAction).toHaveBeenCalledWith([
      transformedEvents[0],
      transformedEvents[1],
    ]);
  });

  test('returns all events when search input is cleared', () => {
    fireEvent.change(screen.getByPlaceholderText('Type to search'), { target: { value: '' } });
    expect(mockOnFilterAction).toHaveBeenCalledWith(
        transformedEvents.map(({ "ticket type": _, ...event }) => event)
      );
  });
});
