export class AppError extends Error {
  constructor(message: string, name: string = "AppError") {
    super(message);
    this.name = name;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    } else {
      this.stack = "";
    }
  }
}
