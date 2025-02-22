import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookTicketModal from './BookTicketModal';
import '@testing-library/jest-dom';
import { Event } from '@tickets/shared';

afterEach(cleanup);

const mockOnClose = jest.fn();

const event: Event = {
  id: '1',
  name: 'Sample Event',
  description: 'This is a sample event description.',
  date: new Date('2025-01-01'),
  availableTickets: {
    Normal: 20,
    VIP: 10,
    'Golden Ring': 0,
    Accessible: 0,
  },
  image: 'http://example.com/image.jpg',
  shortDescription: 'This is a sample event description.',
};

const ticketType = 'VIP';

describe('BookTicketModal', () => {
  it('renders correctly with event and ticketType', () => {
    render(<BookTicketModal event={event} ticketType={ticketType} onClose={mockOnClose} />);

    expect(screen.getByText(`${event.name}: ${ticketType} Ticket`)).toBeInTheDocument();
    expect(screen.getByText(event.description)).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
  });

  it('should disable "Book" button when name is empty or email is invalid', () => {
    render(<BookTicketModal event={event} ticketType={ticketType} onClose={mockOnClose} />);

    const bookButton = screen.getByRole('button', { name: /book/i });

    expect(bookButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Full Name:/i) as HTMLInputElement, { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i) as HTMLInputElement, { target: { value: 'invalid-email' } });

    expect(bookButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/Email:/i) as HTMLInputElement, { target: { value: 'john.doe@example.com' } });

    expect(bookButton).toBeEnabled();
  });

  it('should call onClose when clicking "Cancel" button', () => {
    render(<BookTicketModal event={event} ticketType={ticketType} onClose={mockOnClose} />);

    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should reset form fields and call onClose when clicking "Book" button with valid input', () => {
    render(<BookTicketModal event={event} ticketType={ticketType} onClose={mockOnClose} />);

    fireEvent.change(screen.getByLabelText(/Full Name:/i) as HTMLInputElement, { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email:/i) as HTMLInputElement, { target: { value: 'john.doe@example.com' } });

    const bookButton = screen.getByRole('button', { name: /book/i });
    fireEvent.click(bookButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect((screen.getByLabelText(/Full Name:/i) as HTMLInputElement).value).toBe('');
    expect((screen.getByLabelText(/Email:/i) as HTMLInputElement).value).toBe('');
  });

  it('should show error message for invalid email', () => {
    render(<BookTicketModal event={event} ticketType={ticketType} onClose={mockOnClose} />);

    fireEvent.change(screen.getByLabelText(/Email:/i) as HTMLInputElement, { target: { value: 'invalid-email' } });

    expect(screen.getByText('Enter a valid email')).toBeInTheDocument();
  });

  it('should close modal when "onClose" is called', () => {
    render(<BookTicketModal event={event} ticketType={ticketType} onClose={mockOnClose} />);

    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
