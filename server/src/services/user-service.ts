import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
import { getEnv } from "../tools/env";
import { User } from "../models/User";
import { MailService } from "./mail-service";
import { TokenService } from "./token-service";
import { UserDto } from "../models/dtos";
import { ApiError } from "../exceptions/api-errors";
import { TokenTypes } from "../tools/enums";

export const UserService = {
  async bindTokens(user: object) {
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto});
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto
    };
  },

  async signUp(email: string, password: string) {
    const result = await User.findOne({email});
    if(result) {
      throw ApiError.requestError(`Ошибка. Email ${email} занят`);
    }
    const salt = await bcrypt.genSalt(7);
    const _password: string = await bcrypt.hash(password, salt);

    const activationLink = uuidv4();
    const user = await User.create({email, password: _password, activationLink});
    await MailService.sendActivation(email, `${getEnv("SERVICE_URL")}/activate/${activationLink}`);
    return this.bindTokens(user);
  },

  async applyActivation(activationLink: string) {
    const user = await User.findOne({activationLink: activationLink});
    if(!user) {
      throw ApiError.requestError("Ошибка. Некорректная ссылка");
    }
    user.isActivated = true;
    await user.save();
  },

  async logIn(email: string, password: string) {
    const result = await User.findOne({email});
    if(!result) {
      throw ApiError.requestError(`Пользователь ${email} не найден`);
    }
    const arePassesEqual = await bcrypt.compare(password, result.password);
    if(!arePassesEqual) {
      throw ApiError.requestError("Неверный пароль");
    }
    return this.bindTokens(result);
  },

  async logOut(refreshToken: string) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  },

  async refresh(refreshToken: string) {
    if(!refreshToken) {
      throw ApiError.authError();
    }
    const result: any = TokenService.validateToken(refreshToken, TokenTypes.refresh);
    const token = await TokenService.findToken(refreshToken);
    if(!result || !token) {
      throw ApiError.authError();
    }
    const user = User.findById(result.id);
    return this.bindTokens(user);
  }
};
