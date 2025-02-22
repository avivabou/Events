import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event } from './events.model';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }

  async findPage(page: number): Promise<Event[]> {
    const itemsPerPage = 30;
    const skip = page * itemsPerPage;
    return this.eventModel
      .find()
      .skip(skip)
      .limit(itemsPerPage)
      .exec();
  }
}