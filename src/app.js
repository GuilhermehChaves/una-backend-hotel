import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import routes from './routes';

class App {
  constructor() {
    this.server = express();

    mongoose.connect(process.env.MONGOOSE_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes)
  }
}

export default new App().server;