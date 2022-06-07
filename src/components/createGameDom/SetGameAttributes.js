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

  subTitle.classList.add("sub-title");

  inputContainer.classList.add("input-container");

  inputLabel.setAttribute("for", "input");
  inputLabel.classList.add("labels");

  input.classList.add("inputs");
  input.setAttribute("id", "input");
  input.setAttribute("type", "number");

  startButton.classList.add("buttons");
  startButton.classList.add("start-button");
  cardNumber.classList.add("card-number");
  difficultButtonsContainer.classList.add("difficultButtonsContainer");
  easyButton.classList.add("buttons");
  easyButton.classList.add("easy-button");
  mediumButton.classList.add("buttons");
  mediumButton.classList.add("medium-button");
  hardButton.classList.add("buttons");
  hardButton.classList.add("hard-button");
  resolution.classList.add("resolution");
  restartButton.classList.add("buttons");
  restartButton.classList.add("restart-button");

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
