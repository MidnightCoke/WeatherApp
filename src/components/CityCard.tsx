import { router } from "expo-router";
import { useSetAtom } from "jotai";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { userLocationAtom } from "../atoms/userLocation";
import { weatherSourceAtom } from "../atoms/weatherSource";
import { GeoLocation } from "../constants/geo-location";
import weatherConditions from "../constants/weather-conditions";
import { getLocalTimeFromOffset } from "../utils/get-local-time";
import CityCardSkeleton from "./CityCardSkeleton";

type CityCardProps = {
  item: GeoLocation;
  index?: number;
  weather?: any;
  isLoading?: boolean;
  error?: boolean;
  testID?: string;
};

const CityCard = ({
  item,
  weather,
  isLoading,
  error,
  index,
  testID = "search-result-item",
}: CityCardProps) => {
  const { name, state, country } = item;

  const setWeatherSource = useSetAtom(weatherSourceAtom);

  const setLocation = useSetAtom(userLocationAtom);

  if (isLoading) return <CityCardSkeleton />;
  if (error) return <Text>Error loading weather</Text>;

  const handlePress = () => {
    setWeatherSource("search");
    setLocation({
      lat: item.lat,
      lon: item.lon,
    });
    router.push("/weather-page");
  };

  return (
    <Animated.View
      className="w-full"
      entering={FadeInUp.duration((index ? index + 1 : 2) * 100)}
    >
      <TouchableOpacity
        onPress={handlePress}
        className="flex flex-row h-32 p-3 my-2 justify-between bg-gray-200 rounded-3xl"
        testID={testID}
      >
        <View className="flex flex-1 flex-col justify-between ">
          <View className="flex flex-col">
            <View className="flex flex-row gap-x-2 items-center">
              <Text className="text-black font-semibold text-xl">
                {name}
                {state ? "," : ""}
              </Text>
              {state && (
                <Text
                  className="text-black font-semibold text-lg"
                  numberOfLines={1}
                >
                  {state}
                  {country ? "," : ""}
                </Text>
              )}
              {country && (
                <Text className="text-black font-semibold text-lg">
                  {country}
                </Text>
              )}
            </View>
            <Text className="text-black font-normal text-md">
              {getLocalTimeFromOffset(weather.timezone) ?? ""}
            </Text>
          </View>
          <View className="flex flex-row items-center">
            <Image
              source={
                weatherConditions[
                  (weather?.weather[0]
                    ?.icon as keyof typeof weatherConditions) || "01d"
                ]
              }
              className="w-10 h-10"
              resizeMode="contain"
            />
            <Text className="text-black font-medium text-lg">
              {weather?.weather[0]?.main || "Unknown"}
            </Text>
          </View>
        </View>

        <View className="flex items-center justify-between py-1">
          <Text className="text-black font-bold text-3xl">
            {weather?.main?.temp.toFixed(0)}⁰C
          </Text>
          <View className="flex flex-row items-center gap-x-2">
            <Text className="text-black font-semibold text-sm">
              H: {weather?.main?.temp_max.toFixed(0)}⁰
            </Text>
            <Text className="text-black font-semibold text-sm">
              L: {weather?.main?.temp_min.toFixed(0)}⁰
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CityCard;
