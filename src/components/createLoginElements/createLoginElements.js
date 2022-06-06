export const CreateLoginElements = () => {
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
