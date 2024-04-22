import { Request, Response, NextFunction } from 'express';
import { globalApiController } from '@src/controller/app/globalApiController';
import { findUserByIdService } from '@src/services/user/userQuery';

export const findUserById = (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => globalApiController(findUserByIdService, req, res, next);
