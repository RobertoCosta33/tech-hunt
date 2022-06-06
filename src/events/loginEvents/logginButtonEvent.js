import { game } from "../../pages/game.js";
import { footerPage } from "../../pages/footer.js";

export const loginButtonEvent = (
  name,
  password,
  app,
  loginTitle,
  container,
  title,
  spanPassword
) => {
  if (name != "" && password != "") {
    app.classList.add("root");
    app.removeChild(loginTitle);
    app.removeChild(container);

    app.appendChild(title);

    title.innerText = `Bem Vindo ${name}`;
    game();
  } else {
    spanPassword.innerText = "O nome de usuário e senha são obrigatórios";
  }
};
