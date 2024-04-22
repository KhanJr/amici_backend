import Debug from 'debug';
import * as dotenv from 'dotenv';
import { connect, connection } from 'mongoose';
import { app } from '@src/controller/app/appController';
import {
  ERROR_EVENT,
  FAILED_EVENT,
  OPEN_EVENT,
  READY_EVENT,
} from '@src/utils/constants/eventConstant';
import {
  CONNECTED_TO_DB_MESSAGE,
  MONGODB_APP_DEBUGGER,
} from '@src/utils/constants/stringConstant';

dotenv.config();
const DEBUG = Debug(MONGODB_APP_DEBUGGER);

export const dbConnect = async (uri: string): Promise<void> => {
  connect(uri, {
    serverSelectionTimeoutMS: 5000,
    dbName: process.env.DATABASE_NAME,
  })
    .then(() => DEBUG(CONNECTED_TO_DB_MESSAGE))
    .catch((err: Error) => {
      DEBUG(`${err.name} ${err.message}`);
    });
  connection.once(ERROR_EVENT, (err) => app.emit(FAILED_EVENT, err));
  connection.once(OPEN_EVENT, () => app.emit(READY_EVENT));
};
