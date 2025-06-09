import { useQuery } from "@tanstack/react-query";
import { GeoLocation } from "../constants/geo-location";
import { fetchForecast } from "../services/fetch-forecast";
import { CustomLocation } from "../types/location";

const useForecast = ({ lat, lon }: GeoLocation | CustomLocation) => {
  return useQuery({
    queryKey: ["forecast", lat, lon],
    queryFn: () => fetchForecast(lat, lon),
    enabled: !!lat && !!lon,
    staleTime: 1000 * 60 * 15,
  });
};

export default useForecast;
