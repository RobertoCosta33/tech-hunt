export const mediumButtonEvent = (
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
) => {
  mediumButton.addEventListener("click", () => {
    const difficult = 101;
    const number = parseInt(Number(Math.random() * difficult));

    randomNumber.push(number);

    cardNumber.classList.remove("card-number");
    cardNumber.classList.add("card-number-closed");

    app.appendChild(cardNumber);
    app.appendChild(inputContainer);
    app.appendChild(startButton);

    difficultButtonsContainer.removeChild(easyButton);
    difficultButtonsContainer.removeChild(mediumButton);
    difficultButtonsContainer.removeChild(hardButton);
    app.removeChild(subTitle);

    input.focus();
  });
};
