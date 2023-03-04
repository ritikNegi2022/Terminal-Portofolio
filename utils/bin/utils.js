import * as bin from "./index";
import helpConfig from "../../helpConfig.json";

export const help = (args) => {
  const commands = Object.keys(bin).sort();
  const commandsDescription = [];
  commands.forEach((command) => {
    commandsDescription.push(`> [${command}] -> ${helpConfig[command]}`);
  });
  return `Available commands:\n\n${commandsDescription.join(
    "\n"
  )}\n\n\[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = (args) => {
  return args.join(" ");
};

export const whoami = (args) => {
  return "guest";
};

export const date = (args) => {
  return new Date().toString();
};

export const gui = (args) => {
  window.open("https://ritiknegi2022.github.io/portfolio-v2/", "_self");

  return "Opening GUI version...";
};

export const email = (args) => {
  window.open("mailto:negiritik01@gmail.com");
  return "Opening mailto:negiritik01@gmail.com...";
};

export const repo = async (args) => {
  setTimeout(function () {
    window.open("https://github.com/ritikNegi2022/terminal", "_blank");
  }, 1000);

  return "Opening repository...";
};

export const banner = (args) => {
  return `\n<span id="asciiArt">${`__\/\\\\\\\\\\\\\\\\\\\\\\\\\\____\/\\\\\\________________________\/\\\\\\_____\/\\\\\\\\\\_____\/\\\\\\__\/\\\\\\________\/\\\\\\_        \r\n _\\\/\\\\\\\/\/\/\/\/\/\/\/\/\\\\\\_\\\/\\\\\\______________________\/\\\\\\\\\\____\\\/\\\\\\\\\\\\___\\\/\\\\\\_\\\/\\\\\\_____\/\\\\\\\/\/__       \r\n  _\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\____________________\/\\\\\\\/\\\\\\____\\\/\\\\\\\/\\\\\\__\\\/\\\\\\_\\\/\\\\\\__\/\\\\\\\/\/_____      \r\n   _\\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\__\\\/\\\\\\__________________\/\\\\\\\/\\\/\\\\\\____\\\/\\\\\\\/\/\\\\\\_\\\/\\\\\\_\\\/\\\\\\\\\\\\\/\/\\\\\\_____     \r\n    _\\\/\\\\\\\/\/\/\/\/\/\/\/\/\\\\\\_\\\/\\\\\\________________\/\\\\\\\/__\\\/\\\\\\____\\\/\\\\\\\\\/\/\\\\\\\\\/\\\\\\_\\\/\\\\\\\/\/_\\\/\/\\\\\\____    \r\n     _\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\______________\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\\/\\\\\\_\\\/\/\\\\\\\/\\\\\\_\\\/\\\\\\____\\\/\/\\\\\\___   \r\n      _\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\_____________\\\/\/\/\/\/\/\/\/\/\/\/\\\\\\\/\/__\\\/\\\\\\__\\\/\/\\\\\\\\\\\\_\\\/\\\\\\_____\\\/\/\\\\\\__  \r\n       _\\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\/__\\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\___________\\\/\\\\\\____\\\/\\\\\\___\\\/\/\\\\\\\\\\_\\\/\\\\\\______\\\/\/\\\\\\_ \r\n        _\\\/\/\/\/\/\/\/\/\/\/\/\/\/____\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/____________\\\/\/\/_____\\\/\/\/_____\\\/\/\/\/\/__\\\/\/\/________\\\/\/\/__`}</span> v1.0\n
------------------------------------------------
Type 'help' to see list of available commands.
------------------------------------------------


`;
};

export const profileimage = (args) => {
  return `<img
      src="https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385"
      alt="panda"
    />`;
};
