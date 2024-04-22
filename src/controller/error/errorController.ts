import {
  CAST_ERROR,
  DEV_ENV,
  DUPLICATE_KEY_ERROR,
  PROD_ENV,
  VALIDATION_ERROR,
} from '@src/utils/constants/constant';
import { castError } from '@src/utils/error/castError';
import { devError } from '@src/utils/error/devError';
import { duplicateKeyError } from '@src/utils/error/duplicateKeyError';
import { prodError } from '@src/utils/error/prodError';
import { validationError } from '@src/utils/error/validationError';
import { NextFunction, Request, Response } from 'express';

export const globalErrorHandlerFunction = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  const err = error;
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === DEV_ENV) {
    devError(res, err);
  } else if (process.env.NODE_ENV === PROD_ENV) {
    let prodErrorVar = err;
    if (prodErrorVar.name === CAST_ERROR)
      prodErrorVar = castError(prodErrorVar);
    // TODO: test both of these
    if (prodErrorVar.code === DUPLICATE_KEY_ERROR)
      prodErrorVar = duplicateKeyError(prodErrorVar);
    if (prodErrorVar.name === VALIDATION_ERROR)
      prodErrorVar = validationError(prodErrorVar);
    prodError(res, prodErrorVar);
  }
};
