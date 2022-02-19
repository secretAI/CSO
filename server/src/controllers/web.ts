import { DataBaseError } from "../exceptions/db-errors";
import { Box } from "../models/Goods";

export const Web = {
  async getProducts(req: any, res: any, next: any) {
    try {
      const result = await Box.find(req.body);
      if(!result) {
        throw DataBaseError.dataNotFound("Товары не были получены");
      }
      return res.status(200).json({result});
    }
    catch(err) {
      next(err);
    }
  }
};
