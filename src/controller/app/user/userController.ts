import { NextFunction, Request, Response } from 'express';
import { findUserByIdService } from '@src/services/user/userQuery';

export const getUserById = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await findUserByIdService(_req.params.id, res);
  } catch (error) {
    next(error);
  }
};
