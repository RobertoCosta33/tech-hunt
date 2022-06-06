import { SetLoginAttributes } from "./SetLoginAttributes.js";

export const SetLoginInnerTexts = () => {
  const app = SetLoginAttributes().app;
  const loginTitle = SetLoginAttributes().loginTitle;
  const title = SetLoginAttributes().title;
  const container = SetLoginAttributes().container;
  const labelName = SetLoginAttributes().labelName;
  const inputName = SetLoginAttributes().inputName;
  const labelPassword = SetLoginAttributes().labelPassword;
  const inputPassword = SetLoginAttributes().inputPassword;
  const loginButton = SetLoginAttributes().loginButton;
  const spanPassword = SetLoginAttributes().spanPassword;

  loginTitle.innerText = "Página de login";
  loginButton.innerText = "Sing in";
  labelName.innerText = "*Nome:";
  labelPassword.innerText = "*Senha:";

  inputName.placeholder = "Fulano Sicrano";
  inputPassword.placeholder = "Fulano123#";

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
