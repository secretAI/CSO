import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
import { getEnv } from "../tools/env";
import { User } from "../models/user-model";
import { MailService } from "./mail-service";
import { TokenService } from "./token-service";
import { UserDto } from "../models/dtos";

export const UserService = {
  async signUp(email: string, password: string) {
    const result = await User.findOne({email});
    if(result) {
      throw new Error("Email занят");
    }
    const salt = await bcrypt.genSalt(7);
    const _password: string = await bcrypt.hash(password, salt);

    const activationLink = uuidv4();
    const user = await User.create({email, password: _password, activationLink});
    await MailService.sendActivation(email, `${getEnv("SERVICE_URL")}/activate/${activationLink}`);
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({...userDto});
    
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    console.log(userDto);
    return {
      ...tokens,
      user: userDto
    };
  },

  async applyActivation(activationLink: string) {
    const user = await User.findOne({activationLink: activationLink});
    if(!user) {
      throw new Error("Неккоректная ссылка активации");
    }
    user.isActivated = true;
    await user.save();
  }
};
