import { SetFooterInnerTexts } from "../components/createFooterDom/SetFooterInnerTexts.js";

export const footerPage = () => {
  const app = document.getElementById("footer");
  const footer = SetFooterInnerTexts().footer;
  const authorParagraphy = SetFooterInnerTexts().authorParagraphy;
  const socialsContainer = SetFooterInnerTexts().socialsContainer;
  const linkedinAdderess = SetFooterInnerTexts().linkedinAdderess;
  const linkedinAncor = SetFooterInnerTexts().linkedinAncor;
  const linkedinImage = SetFooterInnerTexts().linkedinImage;
  const githubAdderess = SetFooterInnerTexts().githubAdderess;
  const githubAncor = SetFooterInnerTexts().githubAncor;
  const githubImage = SetFooterInnerTexts().githubImage;
  
  app.appendChild(footer);
  footer.appendChild(authorParagraphy);
  socialsContainer.appendChild(linkedinAdderess);
  linkedinAncor.appendChild(linkedinImage);
  socialsContainer.appendChild(githubAdderess);
  githubAncor.appendChild(githubImage);
  footer.appendChild(socialsContainer);
};
