import { TicketType } from "./types";

export const TICKET_TYPES = ["Normal", "Golden Ring", "VIP", "Accessible"] as const;

export const TICKET_TYPE_COLORS: {[key in TicketType] : string} = {
    "Normal": "red",
    "Golden Ring": "darkorange",
    "VIP": "purple",
    "Accessible": "blue",
}