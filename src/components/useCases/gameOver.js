export const gameOver = (value, randomNumber, chances, resolution, app, startButton, restartButton, inputContainer) => {
  if (!value === randomNumber) {
    chances.pop();
  }

  if (chances.length === 0) {
    resolution.innerText =
      "Você Perdeu! Clique no botão iniciar para recomeçar!";

    app.removeChild(startButton);
    app.removeChild(inputContainer);

    restartButton.addEventListener("click", () => {
      document.location.reload(true);
    });
    app.appendChild(restartButton);
  }
};
