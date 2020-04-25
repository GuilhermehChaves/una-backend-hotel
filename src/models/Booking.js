import { Schema, model } from 'mongoose';

const BookingSchema = new Schema({
  responsible: { type: Schema.Types.ObjectId, ref: 'user' },
  contact: {
    phone: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  hotel: { type: Schema.Types.ObjectId, ref: 'hotel' },
  apartment_type: String,
  period: {
    start: Date,
    end: Date,
  },
  guests: Number,
});

export default model('reserve', BookingSchema);