import { CreateFooterElements } from "./CreateFooterElements.js";

export const SetFooterAttributes = () => {
  const footer = CreateFooterElements().footer;
  const authorParagraphy = CreateFooterElements().authorParagraphy;
  const socialsContainer = CreateFooterElements().socialsContainer;
  const linkedinAdderess = CreateFooterElements().linkedinAdderess;
  const linkedinAncor = CreateFooterElements().linkedinAncor;
  const linkedinImage = CreateFooterElements().linkedinImage;
  const githubAdderess = CreateFooterElements().githubAdderess;
  const githubAncor = CreateFooterElements().githubAncor;
  const githubImage = CreateFooterElements().githubImage;

  footer.classList.add("footer");
  authorParagraphy.classList.add("author");
  socialsContainer.classList.add("socials");

  linkedinAdderess.classList.add("linkedin");
  linkedinAncor.setAttribute(
    "href",
    "https://www.linkedin.com/in/roberto-b-costa-000b91218"
  );
  linkedinAncor.setAttribute("target", "_blank");
  linkedinImage.classList.add("image");
  linkedinImage.setAttribute(
    "src",
    "../public/icons8-linkedin-circundado-48.png"
  );

  linkedinImage.setAttribute("alt", "Linkedin Image");
  githubAdderess.classList.add("github");
  githubAncor.setAttribute("href", "https://github.com/RobertoCosta33");
  githubAncor.setAttribute("target", "_blank");
  githubImage.classList.add("image");
  githubImage.setAttribute("src", "../public/icons8-github-48.png");
  githubImage.setAttribute("alt", "Github Image");

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
