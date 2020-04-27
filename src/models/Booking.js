import { Schema, model } from 'mongoose';

const BookingSchema = new Schema({
  responsible: { type: Schema.Types.ObjectId, ref: 'user' },
  hotel: { type: Schema.Types.ObjectId, ref: 'hotel' },
  apartment_type: String,
  period: {
    start: Date,
    end: Date,
  },
  guests: Number,
});

export default model('reserve', BookingSchema);