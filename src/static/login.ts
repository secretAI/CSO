import { sendRequest } from "../controllers/sendreq";
import { isUsernameValid } from "../config/regex";
const inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
const submit: HTMLElement | null = document.getElementById("submit");

submit?.addEventListener("click", () => {
  if(!isUsernameValid(inputs[0].value)) {
    inputs[0].value = "";
    inputs[0].placeholder = "Имя содержит запрещенные символы";
  } else if(inputs[1].value.length !== 0 && arePassesEqual()) {
    const data: object = {
      username: inputs[0].value,
      password: inputs[1].value
    };
    sendRequest("/login", data);
    for(const input of Array.from(inputs)) {
      input.value = "";
      input.placeholder = "";
    } 
    alert("Пользователь успешно зарегистрирован");
  }
});

function arePassesEqual() {
  if(inputs[1].value === inputs[2].value) {
    return true;
  } else {
    inputs[1].value = inputs[2].value = "";
    inputs[1].placeholder = inputs[2].placeholder = "Пароли не совпадают";
    return false;
  }
}
