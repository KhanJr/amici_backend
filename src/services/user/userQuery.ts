import { Response } from 'express';
import { UserDb } from '@src/models/userModel';

// Get a user by user_name
export const findUserByIdService = async (
  id: string,
  res: Response
): Promise<void> => {
  const userByUserId = await UserDb.findById({ _id: id });
  res.status(200).json({
    status: 'success',
    data: userByUserId,
  });
};
