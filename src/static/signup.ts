// import { sendAxiosRequest } from "../controllers/sendreq";
// import { isUsernameValid } from "../config/validation";
// import { isEmailValid } from "../config/validation";
import { setStatus } from "../tools/status";
const inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
const submit: HTMLElement | null = document.getElementById("submit");
const status: HTMLElement | null = document.getElementById("status");

const defaultBehavior: string[] = ["Имя", "Почта: email@email.com", "Пароль", "Повторите пароль"];

submit?.addEventListener("click", async () => {
  // let username = inputs[0].value;
  // if(!isUsernameValid(username)) {
  //   username = "";
  //   setStatus(status, "red", "Имя содержит запрещенные символы или короче 4-ех символов");
  // } else if (!(username.length > 4)) {
  //   username = "";
  //   setStatus(status, "red", "Имя короче 4-ех символов");
  // } 
  // else if(!isEmailValid(email) && email.length < 0) {
  //   email = "";
  //   setStatus(status, "red", "EMail содержит запрещенные символы");
  // } else if(arePassesOk()) {
  //   const pass = inputs[2].value;
  //   const data: object = {
  //     username: username,
  //     email: email,
  //     password: pass
  //   };
  //   const response = await sendRequest("/signup", data);
  //   if(response.statusCode === 409) {
  //     setStatus(status, "red", "Имя занято");
  //   } else if (response.statusCode === 200) {
  //     setStatus(status, "green", "Регистрация успешно завершена");
  //     for(let i = 0; i < Array.from(inputs).length; i++) {
  //       inputs[i].value = "";
  //       inputs[i].placeholder = defaultBehavior[i];
  //     }
  //     setTimeout(() => {
  //       window.location.href = "/login";
  //     }, 2000);
  //   }
  // }
});

// function isUserNameOk() {
//   let username = inputs[0].value;
//   if(!isUsernameValid(username)) {
//     username = "";
//     setStatus(status, "red", "Имя содержит запрещенные символы или короче 4-ех символов");
//   } else if (username.length < 4) {
//     username = "";
//     setStatus(status, "red", "Имя короче 4-ех символов");
//   } else {
//     return username;
//   }
// }

// function isEmailOk() {
//   let email = inputs[1].value;
//   if(!isEmailValid(email)) {
//     email = "";
//     setStatus(status, "red", "Email некорректен");
//   } else {
//     return email;
//   }
// }

// function arePassesOk() {
//   let pass = inputs[2].value;
//   let repass = inputs[3].value;
//   if(pass.length < 8 || pass !== repass) {
//     pass = repass = "";
//     setStatus(status, "red", "Пароли не совпадают");
//   } else {
//     return pass;
//   }
// }
