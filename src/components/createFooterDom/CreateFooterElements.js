export const CreateFooterElements = () => {
  const authorParagraphy = document.createElement("p");
  const iconsContainer = document.createElement("div");
  const linkedinIconAncor = document.createElement("a");
  const linkedinIcon = document.createElement("ion-icon");
  const githubIconAncor = document.createElement("a");
  const githubIcon = document.createElement("ion-icon");

  return {
    authorParagraphy,
    iconsContainer,
    linkedinIconAncor,
    linkedinIcon,
    githubIconAncor,
    githubIcon,
  };
};
