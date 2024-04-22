import { Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const prodError = (res: Response, error: any): void => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: error.status,
      message: 'Something went wrong! Please try again later.',
    });
  }
};
