import { useQueries } from "@tanstack/react-query";
import { fetchWeather } from "../services/fetch-weather";

const useWeatherBatch = (
  cities: { name: string; lat: number; lon: number }[] = []
) => {
  return useQueries({
    queries: cities.map((city) => ({
      queryKey: ["weather", city.name, city.lat, city.lon],
      queryFn: () => fetchWeather(city.lat, city.lon),
      enabled: !!city.lat && !!city.lon,
      staleTime: 1000 * 60 * 15,
    })),
  });
};

export default useWeatherBatch;
