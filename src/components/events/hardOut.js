export const hardOver = (hardButton) => {
  hardButton.addEventListener("mouseout", () => {
    hardButton.innerText = "Difícil";
  });
};
