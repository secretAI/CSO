import { User } from "../models/User";
import { Box } from "../models/Goods";
import { ProductProperty } from "../tools/enums";

export const AdminService = {
  async isRightful(email: string) {
    const admin = await User.findOne({email});
    if(!admin.isAdmin) {
      return false;
    }
    return true;
  },

  async getAllUsers() {
    const users = await User.find({});
    return users;
  },

  async modifyProduct(title: string, prop: ProductProperty, value: string | number) {
    const good = await Box.findOneAndUpdate({title}, {[`${prop.toLowerCase()}`]: value}, {
      new: true
    });
    return good;
  }
};
