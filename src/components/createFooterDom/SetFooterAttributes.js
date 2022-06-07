import { CreateFooterElements } from "./CreateFooterElements.js";

export const SetFooterAttributes = () => {
  const authorParagraphy = CreateFooterElements().authorParagraphy;
  const iconsContainer = CreateFooterElements().iconsContainer;
  const linkedinIconAncor = CreateFooterElements().linkedinIconAncor;
  const linkedinIcon = CreateFooterElements().linkedinIcon;
  const githubIconAncor = CreateFooterElements().githubIconAncor;
  const githubIcon = CreateFooterElements().githubIcon;

  authorParagraphy.classList.add("author");
  footer.classList.add("footer");
  iconsContainer.classList.add("iconsContainer");
  linkedinIconAncor.setAttribute(
    "href",
    "https://www.linkedin.com/in/roberto-b-costa-000b91218/"
  );
  linkedinIconAncor.setAttribute("target", "_blank");
  linkedinIcon.setAttribute("name", "logo-linkedin");

  githubIconAncor.setAttribute("href", "https://github.com/RobertoCosta33");
  githubIconAncor.setAttribute("target", "_blank");
  githubIcon.setAttribute("name", "logo-github");

  return {
    authorParagraphy,
    iconsContainer,
    linkedinIconAncor,
    linkedinIcon,
    githubIconAncor,
    githubIcon,
  };
};
