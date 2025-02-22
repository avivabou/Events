import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AvailableTicketsDropdown from './AvailableTicketsDropdown';
import type { TicketType } from "@tickets/shared";

describe('AvailableTicketsDropdown', () => {
  const eventId = 'event-123';
  const availableTypes: Record<TicketType, number> = {
      Normal: 10,
      VIP: 5,
      'Golden Ring': 0,
      Accessible: 0
  };
  const onTicketSelect = jest.fn();

  test('renders dropdown with disabled placeholder and menu items', async () => {
    render(
      <AvailableTicketsDropdown
        id={eventId}
        availableTypes={availableTypes}
        onTicketSelect={onTicketSelect}
        imageSource={''}
      />
    );

    expect(screen.getByText('Available tickets')).toBeInTheDocument();

    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);

    expect(await screen.findByText('Normal')).toBeInTheDocument();
    expect(screen.getByText('VIP')).toBeInTheDocument();
  });

  test('calls onTicketSelect with correct parameters when an option is selected', async () => {
    render(
      <AvailableTicketsDropdown
            id={eventId}
            availableTypes={availableTypes}
            onTicketSelect={onTicketSelect} 
            imageSource={''} />
    );

    const select = screen.getByRole('combobox');
    fireEvent.mouseDown(select);

    const option = await screen.findByText('Normal');
    userEvent.click(option);

    expect(onTicketSelect).toHaveBeenCalledWith(eventId, 'Normal');
  });
});
