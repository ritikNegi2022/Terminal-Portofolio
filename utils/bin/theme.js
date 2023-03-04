import Themes from "../../themes.json";

const bannerText = `__\/\\\\\\\\\\\\\\\\\\\\\\\\\\____\/\\\\\\________________________\/\\\\\\_____\/\\\\\\\\\\_____\/\\\\\\__\/\\\\\\________\/\\\\\\_        \r\n _\\\/\\\\\\\/\/\/\/\/\/\/\/\/\\\\\\_\\\/\\\\\\______________________\/\\\\\\\\\\____\\\/\\\\\\\\\\\\___\\\/\\\\\\_\\\/\\\\\\_____\/\\\\\\\/\/__       \r\n  _\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\____________________\/\\\\\\\/\\\\\\____\\\/\\\\\\\/\\\\\\__\\\/\\\\\\_\\\/\\\\\\__\/\\\\\\\/\/_____      \r\n   _\\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\__\\\/\\\\\\__________________\/\\\\\\\/\\\/\\\\\\____\\\/\\\\\\\/\/\\\\\\_\\\/\\\\\\_\\\/\\\\\\\\\\\\\/\/\\\\\\_____     \r\n    _\\\/\\\\\\\/\/\/\/\/\/\/\/\/\\\\\\_\\\/\\\\\\________________\/\\\\\\\/__\\\/\\\\\\____\\\/\\\\\\\\\/\/\\\\\\\\\/\\\\\\_\\\/\\\\\\\/\/_\\\/\/\\\\\\____    \r\n     _\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\______________\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_\\\/\\\\\\_\\\/\/\\\\\\\/\\\\\\_\\\/\\\\\\____\\\/\/\\\\\\___   \r\n      _\\\/\\\\\\_______\\\/\\\\\\_\\\/\\\\\\_____________\\\/\/\/\/\/\/\/\/\/\/\/\\\\\\\/\/__\\\/\\\\\\__\\\/\/\\\\\\\\\\\\_\\\/\\\\\\_____\\\/\/\\\\\\__  \r\n       _\\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\/__\\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\___________\\\/\\\\\\____\\\/\\\\\\___\\\/\/\\\\\\\\\\_\\\/\\\\\\______\\\/\/\\\\\\_ \r\n        _\\\/\/\/\/\/\/\/\/\/\/\/\/\/____\\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/____________\\\/\/\/_____\\\/\/\/_____\\\/\/\/\/\/__\\\/\/\/________\\\/\/\/__`;

export const theme = async (args, callback) => {
  if (args.length === 0) {
    return `Usage: theme [arg]
Args:
  - ls: list all themes
  - set: set a theme
  - random: set a random theme

Example: 
  theme ls # to list all themes
  theme set Gruvbox # to set a theme`;
  }

  switch (args[0]) {
    case "ls":
      let result = Themes.map(
        (theme, index) =>
          `<div class="themeHover" data-theme="${theme.name.toLowerCase()}"><span>${
            index + 1
          }. ${theme.name.toLowerCase()}</span><div class="previewImage" id="${theme.name.toLowerCase()}" style="background-color:${
            theme.background
          };"><div style = "border-color:${theme.border}";><span style="color:${
            theme.user
          };">guest</span><span style="color:${
            theme.symbol
          };">@</span><span style="color:${
            theme.hostname
          };">hostname:</span><span style="color:${
            theme.symbol
          };">$ ~</span><span style="color:${
            theme.foreground
          };"> Banner</span>\n\n<span style="color:${
            theme.foreground
          };" class="previewBanner">${bannerText}\n\n------------------------------------------------
Type 'help' to see list of available commands.
------------------------------------------------</span>\n<span style="color:${
            theme.user
          };">guest</span><span style="color:${
            theme.symbol
          };">@</span><span style="color:${
            theme.hostname
          };">hostname:</span><span style="color:${
            theme.symbol
          };">$ ~</span></div></div></div>`
      ).join("\n");
      result = "\n\n" + result;
      result = `Hover above the themes for previews.` + result;

      return result;
    case "set":
      const selectedTheme = args[1];

      return callback(selectedTheme);

    case "random":
      const randomTheme = Themes[Math.floor(Math.random() * Themes.length)];

      return callback(randomTheme.name.toLowerCase());
  }
};
