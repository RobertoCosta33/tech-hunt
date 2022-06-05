export const easyHover = (easyButton) => {
  easyButton.addEventListener("mouseenter", () => {
    easyButton.innerText = "De 0 a 10";
  });
};
