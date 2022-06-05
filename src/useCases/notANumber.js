export const notANumber = (value, chances, resolution) => {
  if (value === "") {
    chances.push(1);
    resolution.innerText = "Por favor, digite um número válido.";
  }
};
