import { guessUpperOrLower } from "./guessUpperOrLower.js";

export const isEquals = (
  value,
  randomNumber,
  resolution,
  app,
  startButton,
  chances,
  restartButton,
  inputContainer
) => {
  const win = value === randomNumber;
  const message = guessUpperOrLower().guessVerification;

  if (win) {
    resolution.classList.remove("resolutionLoose");
    resolution.classList.add("resolution");

    resolution.innerText =
      "Parabéns! Você adivinhou o número correto! \n Clique no botão iniciar para recomeçar!";

    app.removeChild(startButton);
    app.appendChild(restartButton);
    app.removeChild(inputContainer);

    restartButton.addEventListener("click", () => {
      document.location.reload(true);
    });
  } else {
    chances.pop();
    resolution.classList.add("resolutionLoose");
    resolution.innerText = `Resposta errada! ${message}  Você ainda tem ${chances.length} chances!`;

    guessUpperOrLower(value, randomNumber);
  }
};
