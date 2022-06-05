import { SetInnerTexts } from "./SetInnerTexts.js";
import { isEquals } from "../useCases/isEquals.js";
import { gameOver } from "../useCases/gameOver.js";
import { notANumber } from "../useCases/notANumber.js";
import {
  easyButtonEvent,
  mediumButtonEvent,
  hardButtonEvent,
} from "../events/index.js";

export const AppendChilds = () => {
  const app = document.getElementById("root");
  const subTitle = SetInnerTexts().subTitle;
  const cardNumber = SetInnerTexts().cardNumber;
  const inputContainer = SetInnerTexts().inputContainer;
  const inputLabel = SetInnerTexts().inputLabel;
  const input = SetInnerTexts().input;
  const startButton = SetInnerTexts().startButton;
  const difficultButtonsContainer = SetInnerTexts().difficultButtonsContainer;
  const easyButton = SetInnerTexts().easyButton;
  const mediumButton = SetInnerTexts().mediumButton;
  const hardButton = SetInnerTexts().hardButton;
  const resolution = SetInnerTexts().resolution;
  const restartButton = SetInnerTexts().restartButton;

  const randomNumber = [];
  const chances = [1, 2, 3];

  easyButtonEvent(
    easyButton,
    mediumButton,
    hardButton,
    difficultButtonsContainer,
    app,
    startButton,
    inputContainer,
    subTitle,
    randomNumber,
    input,
    cardNumber
  );
  mediumButtonEvent(
    easyButton,
    mediumButton,
    hardButton,
    difficultButtonsContainer,
    app,
    startButton,
    inputContainer,
    subTitle,
    randomNumber,
    input,
    cardNumber
  );
  hardButtonEvent(
    easyButton,
    mediumButton,
    hardButton,
    difficultButtonsContainer,
    app,
    startButton,
    inputContainer,
    subTitle,
    randomNumber,
    input,
    cardNumber
  );

  startButton.addEventListener("click", () => {
    isEquals(
      Number(input.value),
      randomNumber[0],
      resolution,
      app,
      startButton,
      chances,
      restartButton,
      inputContainer,
      cardNumber
    );

    gameOver(
      Number(input.value),
      randomNumber[0],
      chances,
      resolution,
      app,
      startButton,
      restartButton,
      inputContainer,
      cardNumber
    );

    notANumber(input.value, chances, resolution);

    input.focus();
    input.value = "";
  });

  // app.appendChild(cardNumber);
  inputContainer.appendChild(inputLabel);
  inputContainer.appendChild(input);
  difficultButtonsContainer.appendChild(easyButton);
  difficultButtonsContainer.appendChild(mediumButton);
  difficultButtonsContainer.appendChild(hardButton);
  app.appendChild(subTitle);
  app.appendChild(difficultButtonsContainer);
  app.appendChild(resolution);
};
