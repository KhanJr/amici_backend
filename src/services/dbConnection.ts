import Debug from 'debug';
import * as dotenv from 'dotenv';
import { connect, connection } from 'mongoose';
import { app } from '@src/controller/appController';

dotenv.config();
const DEBUG = Debug('app:mongodb');

export const dbConnect = async (uri: string): Promise<void> => {
  connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })
    .then(() => DEBUG('Successfully conncted to database.'))
    .catch((err: Error) => {
      DEBUG(new Error(`Couldn't connect to mongod ${err}`).toString());
    });
  connection.once('error', (err) => app.emit('failed', err));
  connection.once('open', () => app.emit('ready'));
};
