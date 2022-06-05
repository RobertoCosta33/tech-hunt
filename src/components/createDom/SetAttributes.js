import { CreateElements } from "./CreateElements.js";

export const SetAttributes = () => {
  const subTitle = CreateElements().subTitle;
  const inputContainer = CreateElements().inputContainer;
  const input = CreateElements().input;
  const inputLabel = CreateElements().inputLabel;
  const startButton = CreateElements().startButton;
  const easyButton = CreateElements().easyButton;
  const mediumButton = CreateElements().mediumButton;
  const hardButton = CreateElements().hardButton;
  const difficultButtonsContainer = CreateElements().difficultButtonsContainer;
  const resolution = CreateElements().resolution;
  const restartButton = CreateElements().restartButton;

  subTitle.classList.add("subTitle");

  inputContainer.classList.add("inputContainer");

  inputLabel.setAttribute("for", "input");
  inputLabel.classList.add("labels");

  input.classList.add("inputs");
  input.setAttribute("id", "input");
  input.setAttribute("type", "number");

  startButton.classList.add("buttons");
  startButton.classList.add("startButton");
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
