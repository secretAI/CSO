// import { sendRequest } from "../controllers/sendreq";
// import { getEnv } from "./env";

// export function isUsernameValid(str: string) {
//   const regex = /[^0-9A-Za-z]/;
//   return !regex.test(str);
// }

// export async function isEmailValid(address: string) {
//   try {
//     const result = await sendRequest("https://neutrinoapi.net/email-validate", {
//       "user-id": getEnv("NEU_API_ID"),
//       "api-key": getEnv("NEU_API_KEY"),
//       "email": address
//     });
//     console.log(result);
//     return result;
//   }
//   catch(err) {
//     console.log(err);
//   }
// }

