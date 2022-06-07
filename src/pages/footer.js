import { SetFooterInnerTexts } from "../components/createFooterDom/SetFooterInnerTexts.js";

export const footerPage = () => {
  const footer = document.getElementById("footer");
  const authorParagraphy = SetFooterInnerTexts().authorParagraphy;
  const iconsContainer = SetFooterInnerTexts().iconsContainer;
  const linkedinIconAncor = SetFooterInnerTexts().linkedinIconAncor;
  const linkedinIcon = SetFooterInnerTexts().linkedinIcon;
  const githubIconAncor = SetFooterInnerTexts().githubIconAncor;
  const githubIcon = SetFooterInnerTexts().githubIcon;

  footer.appendChild(iconsContainer);
  iconsContainer.appendChild(linkedinIconAncor);
  iconsContainer.appendChild(githubIconAncor);
  linkedinIconAncor.appendChild(linkedinIcon);
  githubIconAncor.appendChild(githubIcon);
  footer.appendChild(authorParagraphy);
};
