// src/hooks/useGeoSearch.ts
import { useQuery } from "@tanstack/react-query";
import { fetchGeoLocation } from "../services/fetch-cities";

const useGeoSearch = (search: string) => {
  return useQuery({
    queryKey: ["geo", search],
    queryFn: () => fetchGeoLocation(search),
    enabled: !!search,
    staleTime: 1000 * 60 * 15,
  });
};

export default useGeoSearch;
