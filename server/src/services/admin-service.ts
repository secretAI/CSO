import { User } from "../models/User";

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
  }
};
