import { config } from "../constants/config";
import { GeoLocation } from "../constants/geo-location";

export const fetchGeoLocation = async (
  search: string
): Promise<GeoLocation[]> => {
  if (!search.trim()) return [];

  const url = new URL(`${config.GEO_API_ENDPOINT}/direct`);
  url.searchParams.set("q", search);
  url.searchParams.set("limit", "10");
  url.searchParams.set("appid", config.API_KEY || "");

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch cities");

  return res.json();
};
