import { SetGameAttributes } from "./SetGameAttributes.js";

export const SetGameInnerTexts = () => {
  const subTitle = SetGameAttributes().subTitle;
  const cardNumber = SetGameAttributes().cardNumber;
  const inputContainer = SetGameAttributes().inputContainer;
  const input = SetGameAttributes().input;
  const inputLabel = SetGameAttributes().inputLabel;
  const startButton = SetGameAttributes().startButton;
  const difficultButtonsContainer =
    SetGameAttributes().difficultButtonsContainer;
  const easyButton = SetGameAttributes().easyButton;
  const mediumButton = SetGameAttributes().mediumButton;
  const hardButton = SetGameAttributes().hardButton;
  const resolution = SetGameAttributes().resolution;
  const restartButton = SetGameAttributes().restartButton;

  subTitle.innerText = "Escolha a dificuldade para começar o jogo";
  inputLabel.innerText = "Palpite: ";
  startButton.innerText = "Começar";
  easyButton.innerText = "Fácil";
  mediumButton.innerText = "Médio";
  hardButton.innerText = "Difícil";
  resolution.innerText = "";
  restartButton.innerText = "Iniciar";

  return {
    inputLabel,
    input,
    startButton,
    cardNumber,
    inputContainer,
    easyButton,
    mediumButton,
    hardButton,
    difficultButtonsContainer,
    resolution,
    restartButton,
    subTitle,
  };
};
