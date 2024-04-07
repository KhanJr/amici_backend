export class GlobalErorHandler extends Error {
  statusCode: number;

  status: string;

  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
    this.isOperational = true;
    // Capture the stack trace.
    Error.captureStackTrace(this, GlobalErorHandler);
  }
}
