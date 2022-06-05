import { easyButtonEvent } from "../events/easyButtonEvent.js";
import { mediumButtonEvent } from "../events/mediumButtonEvent.js";
import { hardButtonEvent } from "../events/hardButtonEvent.js";

export const getRandomNumber = (easyButton, mediumButton, hardButton) => {
  const easyNumber = easyButtonEvent().randomNumber;
  const mediumNumber = mediumButtonEvent().randomNumber;
  const hardNumber = hardButtonEvent().randomNumber;

  if (easyButton) {
    return easyNumber;
  } else if (mediumButton) {
    return mediumNumber;
  } else if (hardButton) {
    return hardNumber;
  }
};
