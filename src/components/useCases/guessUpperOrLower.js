export const guessUpperOrLower = (value, randomNumber) => {
  const guessVerification =
    value > randomNumber ? "O número é menor!" : "O número é maior!";

  return { guessVerification };
};
