import { User } from "../models/User";

class AdminService {
  async isRightful(email: string) {
    const admin = await User.findOne({email});
    if(!admin.isAdmin) {
      return false;
    }
    return true;
  }

  async getAllUsers() {
    const users = await User.find({});
    return users;
  }

}

export default new AdminService();
