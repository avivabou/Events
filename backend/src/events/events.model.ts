import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TicketType } from '@tickets/shared';
import { Document } from 'mongoose';

@Schema()
export class Event extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  shortDescription: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ type: Map, of: Number, required: true })
  availableTickets: Map<TicketType, number>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
