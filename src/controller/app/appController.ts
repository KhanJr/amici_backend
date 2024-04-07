import Debug from 'debug';
import express from 'express';
import * as dotenv from 'dotenv';
import { router } from '@src/routes/amiciUser';
import { globalErorHandlerFunction } from '../error/errorController';

dotenv.config();

const DEBUG = Debug('app:mongodb');
const app = express();

app.use(express.json());
app.use('/api/v1', router);

// Global Error handler
app.use(globalErorHandlerFunction);

const PORT = process.env.PORT || 4000;

app.on('failed', (err) => {
  DEBUG(`FAILED: ${err} ${PORT}.`);
});

app.on('ready', () => {
  app.listen(PORT, () => {
    DEBUG(`SUCCESS: Server started on ${PORT}`);
  });
});

export { app };
