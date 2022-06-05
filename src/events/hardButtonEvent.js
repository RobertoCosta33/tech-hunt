export const hardButtonEvent = (
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
  hardButton.addEventListener("click", () => {
    const difficult = 201;
    const number = parseInt(Number(Math.random() * difficult));

    randomNumber.push(number);

    cardNumber.classList.remove("cardNumber");
    cardNumber.classList.add("cardNumberClosed");

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
