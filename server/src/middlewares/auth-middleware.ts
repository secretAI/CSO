import { ApiError } from "../exceptions/api-errors";
import { TokenService } from "../services/token-service";
import { TokenTypes } from "../tools/enums";

export function authMiddleware(req: any, res: any, next: any) {
  try {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
      return next(ApiError.authError());
    }
    const accessToken = authHeader.split(" ")[1];
    const userData = TokenService.validateToken(accessToken, TokenTypes.access);
    if(!userData) {
      return next(ApiError.authError());
    }
    req.user = userData;
    next();
  }
  catch(err) {
    return next(ApiError.authError());
  }
}
