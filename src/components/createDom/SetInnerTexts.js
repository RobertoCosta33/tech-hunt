import { SetAttributes } from "./setAttributes.js";

export const SetInnerTexts = () => {
  const title = SetAttributes().title;
  const subTitle = SetAttributes().subTitle;
  const inputContainer = SetAttributes().inputContainer;
  const input = SetAttributes().input;
  const inputLabel = SetAttributes().inputLabel;
  const startButton = SetAttributes().startButton;
  const difficultButtonsContainer = SetAttributes().difficultButtonsContainer;
  const easyButton = SetAttributes().easyButton;
  const mediumButton = SetAttributes().mediumButton;
  const hardButton = SetAttributes().hardButton;
  const resolution = SetAttributes().resolution;
  const restartButton = SetAttributes().restartButton;

  title.innerText = "Bem Vindo!";
  subTitle.innerText = "Escolha a dificuldade para começar o jogo!";
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
    inputContainer,
    title,
    easyButton,
    mediumButton,
    hardButton,
    difficultButtonsContainer,
    resolution,
    restartButton,
    subTitle,
  };
};
