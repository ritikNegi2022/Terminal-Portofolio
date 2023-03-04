import { getWeather } from "../../pages/api";

export const weather = async (args) => {
  const city = args.join("+");

  if (!city) {
    return "Usage: weather [city]. Example: weather casablanca";
  }

  const weather = await getWeather(city);

  return weather;
};
