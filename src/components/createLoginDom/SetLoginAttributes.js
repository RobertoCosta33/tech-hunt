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

  app.classList.add("rootLogin");
  title.classList.add("title");
  container.classList.add("container");
  loginButton.classList.add("loginButton");
  labelName.classList.add("loginLabels");
  labelPassword.classList.add("loginLabels");
  inputName.classList.add("inputsLogin");
  inputPassword.classList.add("inputsLogin");
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
