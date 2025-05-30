import { useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import CityCard from "../components/CityCard";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce";
import useGeoSearch from "../hooks/useGeoSearch";
import useWeatherBatch from "../hooks/useWeatherBatch";
import i18n from "../utils/i18n";

export default function SearchPage() {
  const [input, setInput] = useState("");

  const debouncedSearch = useDebounce(input, 500);

  const { data: cities, isLoading, error } = useGeoSearch(debouncedSearch);
  const weatherQueries = useWeatherBatch(cities ?? []);

  return (
    <View className="flex-1 p-4 bg-black">
      <Text className="py-5 text-5xl font-semibold text-white mt-2 mx-2">
        {i18n.t("search.searchTitle")}
      </Text>
      <SearchBar
        placeholder={i18n.t("search.searchPlaceholder")}
        onChangeText={setInput}
        value={input}
        testID="search-location-field"
      />

      {isLoading && <ActivityIndicator size={"large"} color={"#F0F0F0"} />}
      {error && (
        <Text className="text-center text-red-500 text-lg mt-4">
          {i18n.t("search.fetchError")}
        </Text>
      )}

      {!isLoading &&
        !error &&
        cities?.length === 0 &&
        debouncedSearch.length > 0 && (
          <Text className="text-center text-gray-300 text-lg mt-4">
            {i18n.t("search.noResults")}
          </Text>
        )}

      <FlatList
        data={cities}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item, index }) => {
          const weatherQuery = weatherQueries[index];
          return (
            <CityCard
              item={item}
              index={index}
              weather={weatherQuery?.data}
              isLoading={weatherQuery?.isLoading}
              error={weatherQuery?.isError}
            />
          );
        }}
      />
    </View>
  );
}
