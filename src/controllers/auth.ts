import "jsonwebtoken";
import bcrypt from "bcrypt";
import { getEnv } from "../config/env";
import { User } from "../models/models";
import { IRegRequest } from "../interfaces";

const jwtSecret: string = getEnv("JWT_SECRET");

export class Auth {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async signUp(req: any, res: any) {
    const {
      username,
      password,
      email
    }: IRegRequest = req.body;
    const result: object | null = await User.findOne({username: username});
    if(result !== null) {
      return res.status(409).json({
        error: "Имя пользователя занято",
        statusCode: 409
      });
    } else {
      const salt: string = await bcrypt.genSalt(10);
      const _password: string = await bcrypt.hash(password, salt);
      User.create({username: username, password: _password, email: email});
      return res.status(200).json({
        message: "Регистрация успешно завершена",
        statusCode: 200
      });
    }
  }

  // static async logIn(req: any, res: any) {

  // }

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function signUp(req: any, res: any) {
//   const {
//     username,
//     password,
//     email
//   }: IRegRequest = req.body;
//   const result: object | null = await User.findOne({username: username});
//   if(result !== null) {
//     return res.status(409).json({
//       error: "Имя пользователя занято",
//       statusCode: 409
//     });
//   } else {
//     const salt: string = await bcrypt.genSalt(10);
//     const _password: string = await bcrypt.hash(password, salt);
//     User.create({username: username, password: _password, email: email});
//     return res.status(200).json({
//       message: "Регистрация успешно завершена",
//       statusCode: 200
//     });
//   }
// }
