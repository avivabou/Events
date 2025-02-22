import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EventCard, { EventCardProps } from './EventCard';
import type { TicketType } from '@tickets/shared';

jest.mock('../AvailableTicketsDropdown/AvailableTicketsDropdown', () => ({
  __esModule: true,
  default: ({ onTicketSelect }: { onTicketSelect: (id: string, ticketType: TicketType) => void }) => (
    <button data-testid="dropdown" onClick={() => onTicketSelect('event-1', 'VIP' as TicketType)}>Select VIP</button>
  ),
}));

describe('EventCard', () => {
  const mockProps: EventCardProps = {
    id: 'event-1',
    name: 'Test Event',
    imageSource: '/test-image.jpg',
    description: 'This is a test event.',
    availableStatuses: { VIP: 10, General: 5 } as unknown as Record<TicketType, number>,
    date: '2025-01-01',
    onTicketSelect: jest.fn(),
  };

  test('renders event details correctly', () => {
    render(<EventCard {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockProps.imageSource);
  });

  test('triggers onTicketSelect when a ticket type is selected', () => {
    render(<EventCard {...mockProps} />);
    fireEvent.click(screen.getByTestId('dropdown'));
    expect(mockProps.onTicketSelect).toHaveBeenCalledWith('event-1', 'VIP');
  });
});
