/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataBaseError } from "../exceptions/db-errors";
import ProductService from "../services/product-service";

export const Web = {
  async getAllProducts(req: any, res: any, next: any) {
    try {
      const result = await ProductService.getAllProducts();
      if(!result) {
        throw DataBaseError.dataNotFound("Товары не были получены");
      }
      console.log(result);
      return res.status(200).json(result);
    }
    catch(err) {
      next(err);
    }
  }
};
