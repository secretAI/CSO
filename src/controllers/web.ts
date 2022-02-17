import { DataBaseError } from "../exceptions/db-errors";
import { Box } from "../models/Goods";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function getProducts(req: any, res: any) {
//   try {
//     console.log(req.body);
//     const result: object | null = await Box.find(req.body);
//     return res.status(200).json({
//       message: "Список всех товаров",
//       statusCode: 200,
//       body: result
//     });
//   }
//   catch(err) {
//     console.log(err);
//   }
// }

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
