export class ApiError extends Error {
  status: number;
  errors: Error[];

  constructor(message: string, status: number, errors: Error[] = []) {
    super(message);
    this.status = status;
    this.errors = errors;
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static authError() {
    return new ApiError("Авторизируйтесь что бы продолжить", 401);
  }

  static requestError(msg: string, ...errors: any[]) {
    return new ApiError(msg, 400, errors);
  }
}
