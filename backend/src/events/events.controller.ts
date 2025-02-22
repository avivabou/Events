import { Controller, Get, Query } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll() {
    return this.eventsService.findAll();
  }

  @Get('page')
  async findPage(@Query('page') page: string) {
    const pageIndex = parseInt(page, 10) || 0;
    return this.eventsService.findPage(pageIndex);
  }
}