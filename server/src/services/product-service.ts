import { Box } from "../models/Goods";
import { ProductProperty } from "../tools/enums";

class ProductService {
  async modifyProduct(title: string, prop: ProductProperty, value: string | number) {
    const good = await Box.findOneAndUpdate({title}, {[`${prop.toLowerCase()}`]: value}, {
      new: true
    });
    return good;
  }

  async getAllProducts() {
    const goods = await Box.find({});
    return goods;
  }
}

export default new ProductService();
