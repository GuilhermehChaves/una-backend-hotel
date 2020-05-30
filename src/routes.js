import { Router } from 'express';

const routes = new Router();

import SessionController from './controllers/SessionController';
import HotelController from './controllers/HotelController';
import BookingController from './controllers/BookingController';

routes.post('/sessions', SessionController.store);
routes.post('/hotels', HotelController.store);
routes.post('/hotels/:hotelID/booking', BookingController.store);

routes.get('/hotels/:id', HotelController.show);
routes.get('/hotels', HotelController.index);
routes.get('/users/bookings')

routes.put('/hotels/:id', HotelController.update);

routes.delete('/hotels/:id', HotelController.destroy);

export default routes;