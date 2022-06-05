export const hardButtonEvent = (
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
  hardButton.addEventListener("click", () => {
    const difficult = 201;
    const number = parseInt(Number(Math.random() * difficult));

    randomNumber.push(number);

    console.log("hard >>>", randomNumber);

    app.appendChild(inputContainer);
    app.appendChild(startButton);

    difficultButtonsContainer.removeChild(easyButton);
    difficultButtonsContainer.removeChild(mediumButton);
    difficultButtonsContainer.removeChild(hardButton);
    app.removeChild(subTitle);
  });
};
