import "jsonwebtoken";
import bcrypt from "bcrypt";
import { getEnv } from "../config/env";
import { User } from "../models/models";
import { IRegRequest } from "../interfaces";

const jwtSecret: string = getEnv("JWT_SECRET");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signup(req: any, res: any) {
  const {
    username,
    password,
    email
  }: IRegRequest = req.body;
  const result: object | null = await User.findOne({username: username});
  console.log(result);
  if(result !== null) {
    return res.status(418).send(`${username} is already taken`);
  } else {
    const salt: string = await bcrypt.genSalt(10);
    const _password: string = await bcrypt.hash(password, salt);
    const user: Promise<void> = User.create({username: username, password: _password, email: email});
    return res.status(201).send(user);
  }
}
