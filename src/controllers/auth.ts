/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserService } from "../services/user-service";
import { getEnv } from "../tools/env";

export const Auth = {
  async signUp(req: any, res: any) {
    try {
      const {email, password} = req.body;
      const userData = await UserService.signUp(email, password);
      res.cookie("reToken", userData.refreshToken, {
        maxAge: 2592000000, //30d
        httpOnly: true
      });
      return res.status(200).json(userData);
    }
    catch(err) {
      console.log(err);
    }
  },

  async activate(req: any, res:any) {
    try {
      const activationLink = req.params.link;
      await UserService.applyActivation(activationLink);
      return res.status(200).redirect(getEnv("SERVICE_URL"));
    }
    catch(err) {
      console.log(err);
    }
  },

  async logIn() {
    console.log(1);
  },

  async logOut() {
    console.log(2);
  },

  async getUsers(req: any, res: any) {
    console.log(3);
  }

};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function signUp(req: any, res: any) {
//   const {
//     username,
//     password,
//     email
//   }: IRegRequest = req.body;
//   const result: object | null = await User.findOne({username: username});
//   if(result !== null) {
//     return res.status(409).json({
//       error: "Имя пользователя занято",
//       statusCode: 409
//     });
//   } else {
//     const salt: string = await bcrypt.genSalt(10);
//     const _password: string = await bcrypt.hash(password, salt);
//     User.create({username: username, password: _password, email: email});
//     return res.status(200).json({
//       message: "Регистрация успешно завершена",
//       statusCode: 200
//     });
//   }
// }
