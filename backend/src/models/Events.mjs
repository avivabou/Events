import { Schema, model } from 'mongoose';

const EventSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  date: { type: Date, required: true },
  availableTickets: { type: Object, required: true },
});

export default model('Events', EventSchema);
