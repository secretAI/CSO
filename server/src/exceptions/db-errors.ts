export class DataBaseError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    Object.setPrototypeOf(this, DataBaseError.prototype);
  }

  static uriError() {
    return new DataBaseError("Неверный URI", 503);
  }

  static dataNotFound(msg: string) {
    return new DataBaseError(msg, 503);
  }
}