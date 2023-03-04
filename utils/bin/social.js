import config from "../../config.json";

export const instagram = async (args) => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return "Opening instagram...";
};

export const github = async (args) => {
  window.open(`https://github.com/${config.social.github}/`);

  return "Opening github...";
};

export const linkedin = async (args) => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return "Opening linkedin...";
};
