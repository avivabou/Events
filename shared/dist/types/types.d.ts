import { TICKET_TYPES } from "./constants";
export type TicketType = (typeof TICKET_TYPES)[number];
export type Event = {
    id: string;
    name: string;
    image: string;
    description: string;
    shortDescription: string;
    date: Date;
    availableTickets: Record<TicketType, number>;
};
