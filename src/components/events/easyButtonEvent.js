export const easyButtonEvent = (
  easyButton,
  mediumButton,
  hardButton,
  difficultButtonsContainer,
  app,
  startButton,
  inputContainer,
  subTitle
) => {
  easyButton.addEventListener("click", () => {
    const difficult = 11;
    const randomNumber = parseInt(Number(Math.random() * difficult));

    console.log("easy >>>", randomNumber);

    app.appendChild(inputContainer);
    app.appendChild(startButton);

    difficultButtonsContainer.removeChild(easyButton);
    difficultButtonsContainer.removeChild(mediumButton);
    difficultButtonsContainer.removeChild(hardButton);
    app.removeChild(subTitle);
  });
};
