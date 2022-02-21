/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataBaseError } from "../exceptions/db-errors";
import { Box } from "../models/Goods";

export const Web = {
  async getProducts(req: any, res: any, next: any) {
    try {
      console.log(req.body);
      const result = await Box.find(req.body);
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
