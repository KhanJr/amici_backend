import { NextFunction, Request, Response } from 'express';

export const globalApiController = async (
  callBackFunction: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | Response>,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await callBackFunction(req, res, next);
  } catch (error) {
    next(error);
  }
};
