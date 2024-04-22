import { UserErrorHandler } from '@src/interfaces/errorInterface/userErrorHandler';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const duplicateKeyError = (error: any): UserErrorHandler => {
  const msg = `${error.keyValue.name} already exists.`;
  return new UserErrorHandler(msg, 400);
};
