import { SetFooterAttributes } from "./SetFooterAttributes.js";

export const SetFooterInnerTexts = () => {
  const footer = SetFooterAttributes().footer;
  const authorParagraphy = SetFooterAttributes().authorParagraphy;
  const socialsContainer = SetFooterAttributes().socialsContainer;
  const linkedinAdderess = SetFooterAttributes().linkedinAdderess;
  const linkedinAncor = SetFooterAttributes().linkedinAncor;
  const linkedinImage = SetFooterAttributes().linkedinImage;
  const githubAdderess = SetFooterAttributes().githubAdderess;
  const githubAncor = SetFooterAttributes().githubAncor;
  const githubImage = SetFooterAttributes().githubImage;

  authorParagraphy.innerText =
    "&copyRoberto Barbosa Costa - Tech`in`Hunt - BRQ - 2022";
  linkedinAncor.innerText = "Linkedin";
  githubAncor.innerText = "Github";

  return {
    footer,
    authorParagraphy,
    socialsContainer,
    linkedinAdderess,
    linkedinAncor,
    linkedinImage,
    githubAdderess,
    githubAncor,
    githubImage,
  };
};
