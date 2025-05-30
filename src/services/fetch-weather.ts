import { config } from "../constants/config";

export const fetchWeather = async (lat: number, lon: number): Promise<void> => {
  const url = new URL(`${config.WEATHER_API_ENDPOINT}/weather`);
  url.searchParams.set("lat", lat.toString());
  url.searchParams.set("lon", lon.toString());
  url.searchParams.set("appid", config.API_KEY || "");
  url.searchParams.set("units", "metric");

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");

  return res.json();
};
