import { CreateGameElements } from "./CreateGameElements.js";

export const SetGameAttributes = () => {
  const subTitle = CreateGameElements().subTitle;
  const cardNumber = CreateGameElements().cardNumber;
  const inputContainer = CreateGameElements().inputContainer;
  const input = CreateGameElements().input;
  const inputLabel = CreateGameElements().inputLabel;
  const startButton = CreateGameElements().startButton;
  const easyButton = CreateGameElements().easyButton;
  const mediumButton = CreateGameElements().mediumButton;
  const hardButton = CreateGameElements().hardButton;
  const difficultButtonsContainer = CreateGameElements().difficultButtonsContainer;
  const resolution = CreateGameElements().resolution;
  const restartButton = CreateGameElements().restartButton;

  subTitle.classList.add("subTitle");

  inputContainer.classList.add("inputContainer");

  inputLabel.setAttribute("for", "input");
  inputLabel.classList.add("labels");

  input.classList.add("inputs");
  input.setAttribute("id", "input");
  input.setAttribute("type", "number");

  startButton.classList.add("buttons");
  startButton.classList.add("startButton");
  cardNumber.classList.add("cardNumber");
  difficultButtonsContainer.classList.add("difficultButtonsContainer");
  easyButton.classList.add("buttons");
  easyButton.classList.add("easyButton");
  mediumButton.classList.add("buttons");
  mediumButton.classList.add("mediumButton");
  hardButton.classList.add("buttons");
  hardButton.classList.add("hardButton");
  resolution.classList.add("resolution");
  restartButton.classList.add("buttons");
  restartButton.classList.add("restartButton");

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
