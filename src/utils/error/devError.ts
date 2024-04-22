import { Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const devError = (res: Response, error: any): void => {
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    stackTrace: error.stack,
    errorBlock: error,
  });
};
