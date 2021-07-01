// ====================================================
//      Rutas API
// ====================================================
import express from 'express';
import flickRouter from './flickr.routes';
import authRouter from './auth.routes';
const app = express();

//archivo de
app.use('/', flickRouter);
app.use('/', authRouter);

export default app;