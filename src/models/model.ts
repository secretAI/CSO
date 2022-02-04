import { model } from "mongoose";
import Goods from "./schema";

export const Box = model("Box", Goods);
