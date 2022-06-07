import { CreateLoginElements } from "./createLoginElements.js";

export const SetLoginAttributes = () => {
  const app = CreateLoginElements().app;
  const loginTitle = CreateLoginElements().loginTitle;
  const title = CreateLoginElements().title;
  const container = CreateLoginElements().container;
  const labelName = CreateLoginElements().labelName;
  const inputName = CreateLoginElements().inputName;
  const labelPassword = CreateLoginElements().labelPassword;
  const inputPassword = CreateLoginElements().inputPassword;
  const loginButton = CreateLoginElements().loginButton;
  const spanPassword = CreateLoginElements().spanPassword;

  app.classList.remove("root");

  app.classList.add("root-login");
  title.classList.add("title");
  container.classList.add("container");
  loginButton.classList.add("login-button");
  labelName.classList.add("login-labels");
  labelPassword.classList.add("login-labels");
  inputName.classList.add("inputs-login");
  inputPassword.classList.add("inputs-login");
  spanPassword.classList.add("span");

  inputPassword.setAttribute("type", "password");

  return {
    app,
    loginTitle,
    title,
    container,
    labelName,
    inputName,
    labelPassword,
    inputPassword,
    loginButton,
    spanPassword,
  };
};
