import { UserErrorHandler } from '@src/interfaces/errorInterface/userErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const castError = (error: any): UserErrorHandler => {
  const msg = `Invalid value for ${error.path}: ${error.value[error.path]}`;
  return new UserErrorHandler(msg, 400);
};
