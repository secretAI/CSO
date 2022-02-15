import { Box } from "../models/goods-model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getProducts(req: any, res: any) {
  try {
    console.log(req.body);
    const result: object | null = await Box.find(req.body);
    return res.status(200).json({
      message: "Список всех товаров",
      statusCode: 200,
      body: result
    });
  }
  catch(err) {
    console.log(err);
  }
}
