export const startButtonEvent = (
  startButton,
  value,
  randomNumber,
  resolution,
  app,
  chances,
  restartButton,
  notANumber,
  isEquals,
  gameOver
) => {
  startButton.addEventListener("click", () => {
    notANumber(value, chances, resolution);

    isEquals(
      Number(value),
      randomNumber,
      resolution,
      app,
      startButton,
      chances
    );

    gameOver(
      Number(value),
      randomNumber,
      chances,
      resolution,
      app,
      startButton,
      restartButton
    );

    focus();
  });
};
