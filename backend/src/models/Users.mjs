import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  img: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  deletedAt: { type: Date, default: null },
});

export default model('Users', UserSchema);
