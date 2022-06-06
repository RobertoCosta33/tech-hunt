import { SetLoginInnerTexts } from "../components/createLoginDom/setLoginInnerTexts.js";
import { loginButtonEvent } from "../events/loginEvents/logginButtonEvent.js";

export const login = () => {
  const app = SetLoginInnerTexts().app;
  const loginTitle = SetLoginInnerTexts().loginTitle;
  const title = SetLoginInnerTexts().title;
  const container = SetLoginInnerTexts().container;
  const labelName = SetLoginInnerTexts().labelName;
  const inputName = SetLoginInnerTexts().inputName;
  const labelPassword = SetLoginInnerTexts().labelPassword;
  const inputPassword = SetLoginInnerTexts().inputPassword;
  const loginButton = SetLoginInnerTexts().loginButton;
  const spanPassword = SetLoginInnerTexts().spanPassword;

  loginButton.addEventListener("click", () => {
    loginButtonEvent(
      inputName.value,
      inputPassword.value,
      app,
      loginTitle,
      container,
      title,
      spanPassword
    );
  });

  app.appendChild(loginTitle);
  app.appendChild(container);
  container.appendChild(labelName);
  container.appendChild(inputName);
  container.appendChild(labelPassword);
  container.appendChild(inputPassword);
  container.appendChild(spanPassword);
  container.appendChild(loginButton);

  inputName.focus();
};
