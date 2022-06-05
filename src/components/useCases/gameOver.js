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
  cardNumber
) => {
  if (!value === randomNumber) {
    chances.pop();
  }

  if (chances.length === 0) {
    resolution.innerText = `Você Perdeu! \n Clique no botão iniciar para recomeçar! \n O número correto era:`;

    cardNumber.classList.remove("cardNumberClosed");
    cardNumber.classList.add("cardNumber");
    cardNumber.innerText = randomNumber;

    app.appendChild(cardNumber);
    app.removeChild(startButton);
    app.removeChild(inputContainer);

    restartButton.addEventListener("click", () => {
      AppendChilds();
      app.removeChild(cardNumber);
      app.removeChild(resolution);
      app.removeChild(restartButton);
    });
    app.appendChild(restartButton);
  }
};
