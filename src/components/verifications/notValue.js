const notValue = (value) => {
  value === "" ?? console.log("Por favor, digite um número válido!");
};

console.log(notValue(""));
