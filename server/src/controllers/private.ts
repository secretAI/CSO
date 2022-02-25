/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminService from "../services/admin-service";
import ProductService from "../services/product-service";
import { ApiError } from "../exceptions/api-errors";

export const Private = {
  async getAllUsers(req: any, res: any, next: any) {
    try {
      const {email} = req.body;
      if(!await AdminService.isRightful(email)) throw ApiError.requestError("Недостаточно прав"); 
      const users = await AdminService.getAllUsers();
      return res.status(200).json(users);
    }
    catch(err) {
      next(err);
    }
  },

  async addNewProduct(req: any, res: any, next: any) {
    try {
      const {email, title, type, startingPrice, duration, discount} = req.body;
      if(!await AdminService.isRightful(email)) throw ApiError.requestError("Недостаточно прав");
      const newProd = await ProductService.addNewProduct(title, type, startingPrice, duration, discount);
      if(res.error) process.exit(1);
      return res.status(200).json(newProd);
    }
    catch(err) {
      next(err);
    }
  },

  async modifyProduct(req: any, res: any, next: any) {
    try {
      const {email, title, prop, value} = req.body;
      if(!await AdminService.isRightful(email)) throw ApiError.requestError("Недостаточно прав");
      const changedProd = await ProductService.modifyProduct(title, prop, value);
      if(res.error) process.exit(1);
      return res.status(200).json(changedProd);
    }
    catch(err) {
      next(err);
    }
  }
};
