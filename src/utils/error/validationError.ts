import { UserErrorHandler } from '@src/interfaces/errorInterface/userErrorHandler';
import { ValidationError, ValidationErrorItem } from 'joi';

export const validationError = (error: ValidationError): UserErrorHandler => {
  const errors = error.details.map(
    (value: ValidationErrorItem): string => value.message
  );
  const errorMessages = errors.join('. ');
  const msg = `Invalid input data: ${errorMessages}`;
  return new UserErrorHandler(msg, 400);
};
