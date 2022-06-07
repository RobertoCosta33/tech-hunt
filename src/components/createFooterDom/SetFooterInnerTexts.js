import { SetFooterAttributes } from "./SetFooterAttributes.js";

export const SetFooterInnerTexts = () => {
  const authorParagraphy = SetFooterAttributes().authorParagraphy;
  const iconsContainer = SetFooterAttributes().iconsContainer;
  const linkedinIconAncor = SetFooterAttributes().linkedinIconAncor;
  const linkedinIcon = SetFooterAttributes().linkedinIcon;
  const githubIconAncor = SetFooterAttributes().githubIconAncor;
  const githubIcon = SetFooterAttributes().githubIcon;

  authorParagraphy.innerHTML =
    "&copyRoberto Barbosa Costa - Tech`in`Hunt - BRQ - 2022";

  return {
    authorParagraphy,
    iconsContainer,
    linkedinIconAncor,
    linkedinIcon,
    githubIconAncor,
    githubIcon,
  };
};
