import { game } from "./game.js";

export const login = () => {
  const app = document.getElementById("root");
  const loginTitle = document.createElement("h1");
  const title = document.createElement("h1");
  const container = document.createElement("div");
  const labelName = document.createElement("label");
  const inputName = document.createElement("input");
  const labelPassword = document.createElement("label");
  const inputPassword = document.createElement("input");
  const loginButton = document.createElement("button");
  const spanPassword = document.createElement("span");

  loginTitle.innerText = "Página de login";
  loginButton.innerText = "Sing in";
  labelName.innerText = "*Nome:";
  labelPassword.innerText = "*Senha:";

  inputName.placeholder = "Fulano Sicrano";
  inputPassword.placeholder = "Fulano123#";

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

  app.appendChild(loginTitle);
  app.appendChild(container);
  container.appendChild(labelName);
  container.appendChild(inputName);
  container.appendChild(labelPassword);
  container.appendChild(inputPassword);
  container.appendChild(spanPassword);
  container.appendChild(loginButton);

  loginButton.addEventListener("click", () => {
    if (inputName.value != "" && inputPassword.value != "") {
      app.classList.add("root");
      app.removeChild(loginTitle);
      app.removeChild(container);

      app.appendChild(title);

      title.innerText = `Bem Vindo ${inputName.value}`;
      game();
    } else {
      spanPassword.innerText = "O nome de usuário e senha são obrigatório";
    }
  });
};
