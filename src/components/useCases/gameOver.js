import { AppendChilds } from "../createDom/AppendChilds.js";

export const gameOver = (
  value,
  randomNumber,
  chances,
  resolution,
  app,
  startButton,
  restartButton,
  inputContainer,
) => {
  if (!value === randomNumber) {
    chances.pop();
  }

  if (chances.length === 0) {
    resolution.innerText =
      "Você Perdeu! Clique no botão iniciar para recomeçar!";

    app.removeChild(startButton);
    app.removeChild(inputContainer);

    restartButton.addEventListener("click", () => {
      // document.location.reload(true);
      AppendChilds();
      app.removeChild(resolution);
      app.removeChild(restartButton);
    });
    app.appendChild(restartButton);
  }
};
