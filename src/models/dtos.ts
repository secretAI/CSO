import { IUserDto } from "../tools/interfaces";

export class UserDto {
  email;
  id;
  isActivated;
  isAdmin;

  constructor(model: any) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.isAdmin = model.isAdmin;
  }
}