import { Schema, model } from "mongoose";
import { ProductTypes } from "../tools/enums";

export const Products = new Schema ({
  _thisId: {
    type: Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  type: {
    type: String,
    required: true,
    canBe: ProductTypes,
    default: ProductTypes[1]
  },
  startingPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
    default: 0
  },
  duration: {
    type: Number,
    unit: "day",
    required: true
  },
  actualPrice: {
    type: Number
  }
});

export const Prod = model("Prod", Products);
