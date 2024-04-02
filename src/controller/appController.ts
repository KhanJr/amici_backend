import Debug from 'debug';
import express from 'express';
import * as dotenv from 'dotenv';
// import { router } from '@src/routes/clan';
dotenv.config();

const DEBUG = Debug('app:mongodb');
const app = express();

app.use(express.json());
// app.use('/api/status', router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  app.on('failed', (err) => {
    DEBUG(`FAILED: Server started on ${PORT}`);
    app.get('/', (_req, res) => {
      res.status(404).send(err.toString());
    });
  });

  app.on('ready', () => {
    DEBUG(`SUCCESS: Server started on ${PORT}`);
    app.get('/', (_req, res) => {
      res.status(200).send('Connection is ready to serve.');
    });
  });
});

export { app };
