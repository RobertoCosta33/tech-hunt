export const mediumButtonEvent = (
  easyButton,
  mediumButton,
  hardButton,
  difficultButtonsContainer,
  app,
  startButton,
  inputContainer,
  subTitle
) => {
  mediumButton.addEventListener("click", () => {
    const difficult = 101;
    const randomNumber = parseInt(Number(Math.random() * difficult));

    console.log("medium >>>", randomNumber);

    app.appendChild(inputContainer);
    app.appendChild(startButton);

    difficultButtonsContainer.removeChild(easyButton);
    difficultButtonsContainer.removeChild(mediumButton);
    difficultButtonsContainer.removeChild(hardButton);
    app.removeChild(subTitle);
  });
};
