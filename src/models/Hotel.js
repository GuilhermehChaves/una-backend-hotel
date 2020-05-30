import { Schema, model } from 'mongoose';

const HotelSchema = new Schema({
  name: String,
  uf: String,
  city: String,
  address: String,
  apartment_type: String,
  quantity_room: Number,
  daily: Number,
  imageName: String
});

export default model('hotel', HotelSchema);