import { Router } from 'express';

const routes = new Router();

import SessionController from './controllers/SessionController';
import HotelController from './controllers/HotelController';

routes.post('/sessions', SessionController.store);
routes.post('/hotels', HotelController.store);

routes.get('/hotels/:id', HotelController.show);
routes.get('/hotels', HotelController.index);

routes.put('/hotels/:id', HotelController.update);

routes.delete('/hotels/:id', HotelController.destroy);

export default routes;