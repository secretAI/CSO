export interface IApplication {
  listen(port: string, callback: () => void): void;
}

export interface IRegRequest {
  readonly username: string;
  readonly password: string;
  readonly email?: string | undefined;
}

export interface IUserDto {
  readonly email: string;
  readonly _thisId: string;
  readonly isActivated: boolean;
}
