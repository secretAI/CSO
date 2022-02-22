/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminService from "../services/admin-service";
import ProductService from "../services/product-service";
import { ApiError } from "../exceptions/api-errors";

export const Private = {
  async getAllUsers(req: any, res: any, next: any) {
    try {
      const {email} = req.body;
      if(!await AdminService.isRightful(email)) {
        throw ApiError.requestError("Недостаточно прав");
      } 
      const users = await AdminService.getAllUsers();
      return res.status(200).json(users);
    }
    catch(err) {
      next(err);
    }
  },

  async modifyProduct(req: any, res: any, next: any) {
    try {
      const {email, title, prop, value} = req.body;
      if(!await AdminService.isRightful(email)) {
        throw ApiError.requestError("Недостаточно прав");
      }
      const changed = await ProductService.modifyProduct(title, prop, value);
      return res.status(200).json(changed);
    }
    catch(err) {
      next(err);
    }
  }
};
