export const CreateGameElements = () => {
  const title = document.createElement("h1");
  const subTitle = document.createElement("h3");
  const cardNumber = document.createElement("div");
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("label");
  const input = document.createElement("input");
  const difficultButtonsContainer = document.createElement("div");
  const easyButton = document.createElement("button");
  const mediumButton = document.createElement("button");
  const hardButton = document.createElement("button");
  const resolution = document.createElement("h2");
  const startButton = document.createElement("button");
  const restartButton = document.createElement("button");

  return {
    inputLabel,
    input,
    startButton,
    cardNumber,
    inputContainer,
    title,
    easyButton,
    mediumButton,
    hardButton,
    difficultButtonsContainer,
    resolution,
    restartButton,
    subTitle
  };
};
