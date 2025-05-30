import { config } from "../constants/config";
import { Forecast } from "../constants/forecast";
import i18n from "../utils/i18n";

export const fetchForecast = async (
  lat: number,
  lon: number
): Promise<Forecast> => {
  const url = new URL(`${config.WEATHER_API_ENDPOINT}/forecast`);
  url.searchParams.set("lat", lat.toString());
  url.searchParams.set("lon", lon.toString());
  url.searchParams.set("lang", i18n.locale);
  url.searchParams.set("cnt", "4"); // latest 4 forecasts
  url.searchParams.set("appid", config.API_KEY || "");
  url.searchParams.set("units", "metric");

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch weather data");
  return res.json();
};
