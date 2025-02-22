import {CollectionGridProps} from '../../Components/CollectionGrid/CollectionGrid';
import EventCard, { EventCardProps } from '../../Components/EventCard/EventCard';
import { Event } from '@tickets/shared';

export const VIEWING_MODES = {
    LIST: 'list',
    GRID3: 'grid3',
} as const 

export type EventViewingMode = typeof VIEWING_MODES[keyof typeof VIEWING_MODES];

type EventViewingModeCardProps = {
    onTicketSelect: EventCardProps['onTicketSelect']
};

type EventViewingModesProps =  Record<EventViewingMode,Omit<CollectionGridProps<Event>,'data'>>

export default function getEventsViewingModes(eventCardProps: EventViewingModeCardProps): EventViewingModesProps
    { 
        return ({
            list: {
                injectData: (event: Event) => (
                <EventCard
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    description={event.description}
                    imageSource={event.image}
                    date={event.date.toDateString()}
                    availableStatuses={event.availableTickets}
                    onTicketSelect={eventCardProps.onTicketSelect}
                />
            ),
            itemsInARow: 1,
        },
        grid3: {
            injectData: (event: Event) => (
            <EventCard
                key={event.id}
                id={event.id}
                name={event.name}
                description={event.shortDescription}
                imageSource={event.image}
                date={event.date.toLocaleDateString()}
                availableStatuses={event.availableTickets}
                onTicketSelect={eventCardProps.onTicketSelect}
            />
        ),
        itemsInARow: 3,
    }
})
}