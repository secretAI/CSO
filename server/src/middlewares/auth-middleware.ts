import { ApiError } from "../exceptions/api-errors";
import TokenService from "../services/token-service";
import { TokenTypes } from "../tools/enums";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function authMiddleware(req: any, res: any, next: any) {
  try {
    const authHeader = req.headers.authorization;
    if(!authHeader) return next(ApiError.authError());
    const accessToken = authHeader.split(" ")[1];
    const validation = TokenService.validateToken(accessToken, TokenTypes.access);
    if(!validation) return next(ApiError.authError());
    req.user = validation;
    next();
  }
  catch(err) {
    return next(ApiError.authError());
  }
}
