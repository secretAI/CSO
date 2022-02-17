/* eslint-disable @typescript-eslint/no-explicit-any */
import { validationResult } from "express-validator";
import { UserService } from "../services/user-service";
import { ApiError } from "../exceptions/api-errors";
import { AdminService } from "../services/admin-service";

export const Auth = {
  async signUp(req: any, res: any, next: any) {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return next(ApiError.requestError("Ошибка валидации при регистрации", errors));
      }
      const {email, password} = req.body;
      const userData = await UserService.signUp(email, password);
      res.cookie("reToken", userData.refreshToken, {
        maxAge: 2592000000, //30d
        httpOnly: true
      });
      return res.status(200).json(userData);
    }
    catch(err) {
      next(err);
    }
  },

  async activate(req: any, res:any, next: any) {
    try {
      const activationLink = req.params.link;
      await UserService.applyActivation(activationLink);
      return res.status(200).redirect("/login");
    }
    catch(err) {
      next(err);
    }
  },

  async logIn(req: any, res: any, next: any) {
    try {
      const {email, password} = req.body;
      const userData = await UserService.logIn(email, password);
      res.cookie("reToken", userData.refreshToken, {
        maxAge: 2592000000, //30d
        httpOnly: true
      });
      return res.status(200).json(userData);
    }
    catch(err) {
      next(err);
    }
  },

  async logOut(req: any, res: any, next: any) {
    try {
      const {refreshToken} = req.cookies;
      const token = await UserService.logOut(refreshToken);
      res.clearCookie("reToken");
      return res.status(200).json(token);
    }
    catch(err) {
      next(err);
    }
  },

  async refresh(req: any, res: any, next: any) {
    try {
      const {refreshToken} = req.cookies;
      const userData = await UserService.refresh(refreshToken);
      return res.status(200).json(userData);
    }
    catch(err) {
      next(err);
    }
  },

  async getUsers(req: any, res: any, next: any) {
    try {
      const {email} = req.body;
      const isRightful = await AdminService.isRightful(email);
      if(!isRightful) {
        throw ApiError.requestError("Недостаточно прав");
      }
      const users = await AdminService.getAllUsers();
      return res.status(200).json(users);
    }
    catch(err) {
      next(err);
    }
  }

};

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
