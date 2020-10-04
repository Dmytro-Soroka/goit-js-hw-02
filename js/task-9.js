function isLoginValid(login, min = 4, max = 16) {
  return login.length >= min && login.length <= max;
}

function isLoginUnique(allLogins, login) {
  "use strict";

  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (isLoginValid(login) === false) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
  } else {
    allLogins.push(login);
    message = SUCCESS;
  }
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
