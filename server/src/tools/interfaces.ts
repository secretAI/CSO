export interface IApplication {
  listen(port: string, callback: () => void): void;
}

export interface IUserDto {
  email: string;
  _thisId: string;
  isActivated: boolean;
}
