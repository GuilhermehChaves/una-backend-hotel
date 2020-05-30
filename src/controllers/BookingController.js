import Booking from '../models/Booking';
import User from '../models/User';
import Hotel from '../models/Hotel';

class BookingController {
    async index(request, response) {
        const { responsible } = request.body;
        const bookings = await Booking.find({ responsible });
        return response.status(200).json(bookings);
    }

    async store(request, response) {
        const { userID } = request.headers;
        const { period, guests } = request.body;
        const { hotelID } = request.params;

        User.findById(userID).catch(e => {
            return response.status(401).json({ message: 'User unauthorized' });
        });

        Hotel.findById(hotelID).catch(e => {
            return response.status(400).json({ message: 'Invalid hotel' });
        })

        const booking = await Booking.create({
            responsible: userID,
            hotel: hotelID,
            period,
            guests,
        });

        await booking.populate('reponsible').populate('hotel').execPopulate();
        return response.status(200).json(booking);
    }
}

export default new BookingController;