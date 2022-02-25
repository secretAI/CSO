import { Prod } from "../models/Goods";

export async function setActualPrice(duration: number) {
  const result = await Prod.findOne({duration});
  const starting = result.startingPrice;
  const discount = result.discount;
  let actual = result.actualPrice;
  console.log(starting);
  if(result.discount == 0) actual = starting; 
  actual = starting - (discount / 100 * starting);
  console.log(actual);
  return actual;
}