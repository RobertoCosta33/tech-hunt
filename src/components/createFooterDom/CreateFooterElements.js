export const CreateFooterElements = () => {
  const footer = document.createElement("footer");
  const authorParagraphy = document.createElement("p");
  const socialsContainer = document.createElement("div");
  const linkedinAdderess = document.createElement("div");
  const linkedinAncor = document.createElement("a");
  const linkedinImage = document.createElement("img");
  const githubAdderess = document.createElement("div");
  const githubAncor = document.createElement("a");
  const githubImage = document.createElement("img");

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
