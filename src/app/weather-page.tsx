import { useAtom } from "jotai";
import { Image, ImageBackground, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { userLocationAtom } from "../atoms/userLocation";
import { weatherSourceAtom } from "../atoms/weatherSource";
import ForecastCard from "../components/ForecastCard";
import WeatherDetailSkeleton from "../components/WeatherDetailSkeleton";
import WeatherInfoSkeleton from "../components/WeatherInfoSkeleton";
import { bgImage, defaultBgImage } from "../constants/bg-image";
import icons from "../constants/icons";
import weatherConditions from "../constants/weather-conditions";
import useForecast from "../hooks/useForecast";
import { formatUnixTimeWithTimezone } from "../utils/format-unix-time";
import i18n from "../utils/i18n";

export default function WeatherPage() {
  const [source] = useAtom(weatherSourceAtom);
  const [location] = useAtom(userLocationAtom);

  const {
    data: forecast,
    isLoading,
    error,
  } = useForecast(location || { lat: 40.7128, lon: -74.006 });

  if (error) {
    return (
      <SafeAreaView className="bg-black flex-1 justify-center items-center h-full">
        <Text className="text-red-500 text-2xl text-center px-5">
          {i18n.t("weather.errorMessage")}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ImageBackground
        source={bgImage[forecast?.list[0].weather[0].main] || defaultBgImage}
        resizeMode="cover"
        className="flex-1"
      >
        <View className="flex-1 bg-black/30 relative">
          {/* ACTUAL INFORMATION */}
          {isLoading && <WeatherInfoSkeleton />}

          {!isLoading && (
            <Animated.View
              entering={FadeIn.duration(400)}
              className="flex-1 flex-col gap-y-5 mx-2  p-5"
            >
              <View className="flex items-start justify-center mt-3 gap-y-1">
                <Text className="font-medium text-xl text-white py-3">
                  {formatUnixTimeWithTimezone(
                    forecast?.list[0].dt,
                    forecast?.city.timezone,
                    "date"
                  ) || i18n.t("weather.unknown")}
                </Text>
                <View className="flex-row justify-center items-center gap-x-2">
                  {source === "location" && (
                    <Image
                      source={icons.compass}
                      className="w-6 h-6"
                      resizeMode="contain"
                      tintColor="#F0F0F0"
                    />
                  )}

                  <Text className="text-xl text-white font-semibold">
                    {forecast?.city.name || ""}
                  </Text>

                  <Text className="text-xl text-white font-semibold">
                    {forecast?.city.country || ""}
                  </Text>
                </View>
              </View>

              <View className="flex gap-y-3">
                <Text className="text-9xl text-white font-bold tracking-widest">
                  {forecast?.list[0].main.temp.toFixed(0) || 0}⁰c
                </Text>
                <View className="flex-row items-center">
                  <View>
                    <Image
                      source={weatherConditions["10d"]}
                      className="w-20 h-20"
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="text-2xl font-semibold text-white capitalize">
                    {forecast?.list[0].weather[0].description ||
                      i18n.t("weather.unknown")}
                  </Text>
                </View>
              </View>
            </Animated.View>
          )}

          {/* DETAILED INFORMATION */}

          {isLoading && <WeatherDetailSkeleton />}

          {!isLoading && (
            <Animated.View
              entering={FadeIn.duration(800)}
              className="flex-1 justify-center items-center rounded-lg"
            >
              <View className="flex  py-5 gap-y-5 px-2 flex-col w-4/5  rounded-3xl bg-black/70  ">
                <View className="flex-row items-center justify-center">
                  <View className="flex-col w-1/3 items-center gap-y-1">
                    <Image
                      source={icons.humidity}
                      className="w-6 h-6"
                      resizeMode="contain"
                      tintColor="#F0F0F0"
                    />
                    <Text className="text-white">
                      {i18n.t("weather.humidity")}
                    </Text>
                    <Text className="text-white">
                      {forecast?.list[0].main.humidity || 0} %
                    </Text>
                  </View>
                  <View className="flex-col p-3 border-x-hairline border-white items-center gap-y-1">
                    <Image
                      source={icons.wind}
                      className="w-6 h-6"
                      resizeMode="contain"
                      tintColor="#F0F0F0"
                    />
                    <Text className="text-white">
                      {i18n.t("weather.windSpeed")}
                    </Text>
                    <Text className="text-white">
                      {forecast?.list[0].wind.speed} km/h
                    </Text>
                  </View>
                  <View className="flex-col w-1/3 justify-between items-center gap-y-1">
                    <Image
                      source={icons.temperature}
                      className="w-6 h-6"
                      resizeMode="contain"
                      tintColor="#F0F0F0"
                    />
                    <Text className="text-white">
                      {i18n.t("weather.feelsLike")}
                    </Text>
                    <Text className="text-white">
                      {forecast?.list[0].main.feels_like.toFixed(0) || 0}⁰c
                    </Text>
                  </View>
                </View>
                <View className="flex-row justify-around items-center">
                  <View className="flex-row justify-between items-center gap-x-2">
                    <Image
                      source={icons.sunrise}
                      className="w-6 h-6"
                      resizeMode="contain"
                      tintColor="#F0F0F0"
                    />
                    <View className="flex-col items-center">
                      <Text className="text-white font-semibold">
                        {i18n.t("weather.sunrise")}
                      </Text>
                      <Text className="text-white">
                        {(forecast?.city.sunrise &&
                          formatUnixTimeWithTimezone(
                            forecast?.city.sunrise,
                            forecast?.city.timezone,
                            "time"
                          )) ||
                          "No data"}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center gap-x-2">
                    <Image
                      source={icons.sunset}
                      className="w-6 h-6"
                      resizeMode="contain"
                      tintColor="#F0F0F0"
                    />
                    <View className="flex-col items-center">
                      <Text className="text-white font-semibold">
                        {i18n.t("weather.sunset")}
                      </Text>
                      <Text className="text-white">
                        {(forecast?.city.sunset &&
                          formatUnixTimeWithTimezone(
                            forecast?.city.sunset,
                            forecast?.city.timezone
                          )) ||
                          "No data"}
                      </Text>
                    </View>
                  </View>
                </View>
                <View className="flex-row justify-around items-center">
                  {forecast?.list.slice(1).map((item) => (
                    <ForecastCard
                      key={item.dt}
                      iconCode={item.weather[0].icon}
                      temp={Math.round(item.main.temp)}
                      time={formatUnixTimeWithTimezone(
                        item.dt,
                        forecast.city.timezone
                      )}
                    />
                  ))}
                </View>
              </View>
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
