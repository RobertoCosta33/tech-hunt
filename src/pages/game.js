import { SetGameInnerTexts } from "../components/createGameDom/SetGameInnerTexts.js";
import { isEquals } from "../useCases/gameCases/isEquals.js";
import { gameOver } from "../useCases/gameCases/gameOver.js";
import { notANumber } from "../useCases/gameCases/notANumber.js";
import { easyHover } from "../events/easyEnter.js";
import { easyOver } from "../events/easyOut.js";
import { mediumHover } from "../events/mediumEnter.js";
import { mediumOver } from "../events/mediumOut.js";
import { hardHover } from "../events/hardEnter.js";
import { hardOver } from "../events/hardOut.js";
import { easyButtonEvent } from "../events/easyButtonEvent.js";
import { mediumButtonEvent } from "../events/mediumButtonEvent.js";
import { hardButtonEvent } from "../events/hardButtonEvent.js";

export const game = () => {
  const app = document.getElementById("root");
  const subTitle = SetGameInnerTexts().subTitle;
  const cardNumber = SetGameInnerTexts().cardNumber;
  const inputContainer = SetGameInnerTexts().inputContainer;
  const inputLabel = SetGameInnerTexts().inputLabel;
  const input = SetGameInnerTexts().input;
  const startButton = SetGameInnerTexts().startButton;
  const difficultButtonsContainer = SetGameInnerTexts().difficultButtonsContainer;
  const easyButton = SetGameInnerTexts().easyButton;
  const mediumButton = SetGameInnerTexts().mediumButton;
  const hardButton = SetGameInnerTexts().hardButton;
  const resolution = SetGameInnerTexts().resolution;
  const restartButton = SetGameInnerTexts().restartButton;

  const randomNumber = [];
  const chances = [1, 2, 3];

  easyHover(easyButton);
  easyOver(easyButton);

  mediumHover(mediumButton);
  mediumOver(mediumButton);

  hardHover(hardButton);
  hardOver(hardButton);

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

  inputContainer.appendChild(inputLabel);
  inputContainer.appendChild(input);
  difficultButtonsContainer.appendChild(easyButton);
  difficultButtonsContainer.appendChild(mediumButton);
  difficultButtonsContainer.appendChild(hardButton);
  app.appendChild(subTitle);
  app.appendChild(difficultButtonsContainer);
  app.appendChild(resolution);
};
