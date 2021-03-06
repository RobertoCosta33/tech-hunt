import { game } from "../../pages/game.js";

export const gameOver = (
  value,
  randomNumber,
  chances,
  resolution,
  app,
  startButton,
  restartButton,
  inputContainer,
  cardNumber
) => {
  if (!value === randomNumber) {
    chances.pop();
  }

  if (chances.length === 0) {
    resolution.innerText = `Você Perdeu! \n Clique no botão iniciar para recomeçar. \n O número correto era:`;

    cardNumber.classList.remove("card-number-closed");
    cardNumber.classList.add("card-number");
    cardNumber.innerText = randomNumber;

    app.appendChild(cardNumber);
    app.removeChild(startButton);
    app.removeChild(inputContainer);

    restartButton.addEventListener("click", () => {
      game();
      app.removeChild(cardNumber);
      app.removeChild(resolution);
      app.removeChild(restartButton);
    });
    app.appendChild(restartButton);
  }
};
