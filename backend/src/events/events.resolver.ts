import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './events.model';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query(() => [Event])
  async findAll() {
    return this.eventsService.findAll();
  }

  @Query(() => [Event])
  async findPage(@Args('page', { type: () => Int, defaultValue: 0 }) page: number) {
    return this.eventsService.findPage(page);
  }
}