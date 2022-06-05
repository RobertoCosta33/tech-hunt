export const mediumButtonEvent = (
  easyButton,
  mediumButton,
  hardButton,
  difficultButtonsContainer,
  app,
  startButton,
  inputContainer,
  subTitle,
  randomNumber
) => {
  mediumButton.addEventListener("click", () => {
    const difficult = 101;
    const number = parseInt(Number(Math.random() * difficult));

    randomNumber.push(number);

    console.log("medium >>>", randomNumber);

    app.appendChild(inputContainer);
    app.appendChild(startButton);

    difficultButtonsContainer.removeChild(easyButton);
    difficultButtonsContainer.removeChild(mediumButton);
    difficultButtonsContainer.removeChild(hardButton);
    app.removeChild(subTitle);
  });
};
