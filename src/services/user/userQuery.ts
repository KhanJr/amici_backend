import { Request, Response, NextFunction } from 'express';
import { UserDb } from '@src/models/userModel';
import { UserErrorHandler } from '@src/interfaces/errorInterface/userErrorHandler';

// Get a user by user_name
export const findUserByIdService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> => {
  const { id } = req.params;
  const userByUserId = await UserDb.findById({ _id: id });
  if (userByUserId === null) {
    const userNotFoundError = new UserErrorHandler('Unable to find user.', 404);
    return next(userNotFoundError);
  }
  return res.status(200).json({
    status: 'success',
    data: userByUserId,
  });
};
