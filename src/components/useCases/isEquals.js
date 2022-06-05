import { game } from "../../pages/game.js";

export const isEquals = (
  value,
  randomNumber,
  resolution,
  app,
  startButton,
  chances,
  restartButton,
  inputContainer,
  cardNumber
) => {
  const win = value === randomNumber;
  const message =
    value > randomNumber ? "O número é menor." : "O número é maior.";

  if (win) {
    resolution.classList.remove("resolutionLoose");
    resolution.classList.add("resolution");

    resolution.innerText =
      `Parabéns! Você adivinhou o número correto. \n Clique no botão iniciar para recomeçar! \n O número correto é: `;

    cardNumber.innerText = randomNumber;
    cardNumber.classList.remove("cardNumberClosed");
    cardNumber.classList.add("cardNumber");

    app.appendChild(cardNumber);
    app.removeChild(startButton);
    app.appendChild(restartButton);
    app.removeChild(inputContainer);

    restartButton.addEventListener("click", () => {
      game();
      app.removeChild(cardNumber);
      app.removeChild(resolution);
      app.removeChild(restartButton);
    });
  } else {
    chances.pop();
    resolution.classList.add("resolutionLoose");
    resolution.innerText = `Resposta errada. ${message}  Você ainda tem ${chances.length} chances.`;
  }
};
