import jwt from "jsonwebtoken";
import { getEnv } from "../tools/env";
import { Token } from "../models/token-model";

const jwtSecret: string = getEnv("JWT_SECRET");
const jwtRefresh: string = getEnv("JWT_REFRESH");

export const TokenService = {
  generateTokens(payload: object) {
    const accessToken = jwt.sign({payload}, jwtSecret, {
      expiresIn: 1800000 //30min
    });
    const refreshToken = jwt.sign({payload}, jwtRefresh, {
      expiresIn: 2592000000 //30days
    });
    return {
      accessToken,
      refreshToken
    };
  },

  async saveToken(userId: string, refreshToken: string) {
    const result = await Token.findOne({user: userId});
    if(result) {
      result.refreshToken = refreshToken;
      return result.save();
    }
    const token = await Token.create({user: userId, reToken: refreshToken});
    return token;
  }
};
