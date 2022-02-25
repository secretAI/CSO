import { Prod } from "../models/Goods";
import { ProductProperty } from "../tools/enums";
import { ProductTypes } from "../tools/enums";
import { setActualPrice } from "../tools/price-handler";

class ProductService {
  async addNewProduct(title: string, type: ProductTypes, startingPrice: number, duration: number, discount?: number) {
    const newProd = await Prod.create({title, type, startingPrice, discount, duration});
    newProd.actualPrice = await setActualPrice(duration);
    await newProd.save();
    return newProd;
  }

  async modifyProduct(title: string, prop: ProductProperty, value: string | number) {
    const good = await Prod.findOneAndUpdate({title}, {[`${prop}`]: value}, {
      new: true
    });
    return good;
  }

  async getAllProducts() {
    const goods = await Prod.find({});
    return goods;
  }
}

export default new ProductService();
