export const easyButtonEvent = (
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
  easyButton.addEventListener("click", () => {
    const difficult = 11;
    const number = parseInt(Number(Math.random() * difficult));

    randomNumber.push(number);

    console.log("easy >>>", randomNumber);

    app.appendChild(inputContainer);
    app.appendChild(startButton);

    difficultButtonsContainer.removeChild(easyButton);
    difficultButtonsContainer.removeChild(mediumButton);
    difficultButtonsContainer.removeChild(hardButton);
    app.removeChild(subTitle);
  });
};
