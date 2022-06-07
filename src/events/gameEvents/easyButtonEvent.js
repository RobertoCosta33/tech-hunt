export const easyButtonEvent = (
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
  easyButton.addEventListener("click", () => {
    const difficult = 11;
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
