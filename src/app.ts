import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/index.routes';
dotenv.config();

const app: Application = express();

app.set('port', process.env.PORT);
app.use(morgan('dev'));
app.use(express.json());


const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,POST',
    origin: process.env.CLIENT_CORS_URL,
  };
 
app.use(cors(options));

app.use('/api', indexRoutes);

export default app;