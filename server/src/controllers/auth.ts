/* eslint-disable @typescript-eslint/no-explicit-any */
import { validationResult } from "express-validator";
import UserService from "../services/user-service";
import { ApiError } from "../exceptions/api-errors";

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
      const {reToken} = req.cookies;
      console.log(req.cookies);
      const newToken = await UserService.refresh(reToken);
      return res.status(200).json(newToken);
    }
    catch(err) {
      next(err);
    }
  }
};
