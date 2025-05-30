/* eslint-disable @typescript-eslint/no-unused-vars */
import { router } from "expo-router";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { userLocationAtom } from "../atoms/userLocation";
import { weatherSourceAtom } from "../atoms/weatherSource";
import CustomButton from "../components/CustomButton";
import OrSeperator from "../components/OrSeperator";
import { getLocation } from "../services/location";
import i18n from "../utils/i18n";

export default function Index() {
  const [loadingLocation, setLoadingLocation] = useState(false);

  const setWeatherSource = useSetAtom(weatherSourceAtom);
  const setUserLocation = useSetAtom(userLocationAtom);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleLocation = async () => {
    setLoadingLocation(true);

    const [location, _] = await Promise.all([getLocation(), delay(1000)]);

    if (location) {
      setUserLocation(location);
      setWeatherSource("location");
      router.push("/weather-page");
    }

    setLoadingLocation(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 justify-center p-4">
        <Text className="font-bold text-3xl text-center py-3 text-white">
          {i18n.t("main.weatherApp")}
        </Text>
        <CustomButton
          title={i18n.t("buttons.searchLocation")}
          handlePress={() => router.push("/search-page")}
          testID="search-location-button"
        />
        <View className="flex justify-center items-center">
          <OrSeperator />
        </View>
        <CustomButton
          title={i18n.t("buttons.useMyLocation")}
          handlePress={handleLocation}
          isLoading={loadingLocation}
          testID="use-my-location-button"
        />
      </View>
    </SafeAreaView>
  );
}
