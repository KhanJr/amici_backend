import Debug from 'debug';
import { server } from '@src/controller/app/appController';
import {
  UNHANDLED_REJECTION,
  UNCAUGHT_EXCEPTION,
} from '@src/utils/constants/constant';
import {
  MONGODB_APP_DEBUGGER,
  SERVER_CLOSED_MESSAGE,
  UNCAUGHT_EXCEPTION_MESSAGE,
  UNHANDLED_REJECTION_MESSAGE,
} from '../constants/stringConstant';

export const unhandledGlobalErrorCapture = (): void => {
  const DEBUG = Debug(MONGODB_APP_DEBUGGER);
  // Caught unhandled rejection
  process.on(UNHANDLED_REJECTION, (error: Error) => {
    DEBUG(`${UNHANDLED_REJECTION_MESSAGE} ${error.name} ${error.message}`);
    process.exit(1);
  });

  // caught uncaught exceptions
  process.on(UNCAUGHT_EXCEPTION, (error) => {
    DEBUG(`${UNCAUGHT_EXCEPTION_MESSAGE} ${error.name} ${error.message}`);
    if (server && server.listening) {
      server.close(() => {
        DEBUG(SERVER_CLOSED_MESSAGE);
      });
    }
    process.exit(1);
  });
};
