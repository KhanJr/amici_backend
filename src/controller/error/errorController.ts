import { NextFunction, Request, Response } from 'express';

export const globalErorHandlerFunction = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  // eslint-disable-next-line no-param-reassign
  error.statusCode = error.statusCode || 500;
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
  });
};
