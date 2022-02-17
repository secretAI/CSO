import { ApiError } from "../exceptions/api-errors";
import { DataBaseError } from "../exceptions/db-errors";

export function errorHandler(err: Error, req: any, res: any, next: any) {
  console.log(err);
  if(err instanceof ApiError) {
    return res.status(err.status).json({message: err.message, errors: err.errors});
  } else if(err instanceof DataBaseError) {
    return res.status(err.status).json({message: err.message});
  }
  return res.status(500).json({message: "Непредвиденная ошибка сервера"});
}
