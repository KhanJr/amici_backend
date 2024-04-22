import Debug from 'debug';
import express from 'express';
import * as dotenv from 'dotenv';
import { router } from '@src/routes/amiciUser';
import { globalErrorHandlerFunction } from '@src/controller/error/errorController';
import { Server } from 'http';
import {
  MONGODB_APP_DEBUGGER,
  SERVER_CLOSED_MESSAGE,
  SERVER_STARTED_MESSAGE,
} from '@src/utils/constants/stringConstant';
import { FAILED_EVENT, READY_EVENT } from '@src/utils/constants/eventConstant';

dotenv.config();

const DEBUG = Debug(MONGODB_APP_DEBUGGER);
const app = express();

// defining the server
// eslint-disable-next-line import/no-mutable-exports
let server: Server;

app.use(express.json());
app.use('/api/v1', router);

// Global Error handler
app.use(globalErrorHandlerFunction);

const PORT = process.env.PORT || 4000;

// start the server if db connection success
app.on(READY_EVENT, () => {
  server = app.listen(PORT, () => {
    DEBUG(`${SERVER_STARTED_MESSAGE}${PORT}`);
  });
});

// exit if db connection failed
app.on(FAILED_EVENT, () => {
  if (server && server.listening) {
    DEBUG(server.listening);
    server.close(() => {
      DEBUG(SERVER_CLOSED_MESSAGE);
    });
  }
  process.exit(1);
});

export { app, server };
