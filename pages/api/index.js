import axios from "axios";
import config from "../../config.json";

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/ritikNegi2022/repos`
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getWeather = async (city) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get("https://api.quotable.io/random");

  return { quote: `“${data.content}” — ${data.author}` };
};
