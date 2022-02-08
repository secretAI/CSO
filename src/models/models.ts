import { model } from "mongoose";
import {Goods, Users} from "./schemas";

export const Box = model("Box", Goods);
export const User = model("User", Users);
