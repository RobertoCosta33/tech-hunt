export const easyOver = (easyButton) => {
  easyButton.addEventListener("mouseout", () => {
    easyButton.innerText = "Fácil";
  });
};
