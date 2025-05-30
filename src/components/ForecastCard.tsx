import React from "react";
import { Image, Text, View } from "react-native";
import weatherConditions from "../constants/weather-conditions";

type ForecastCardProps = {
  iconCode: string;
  temp: number;
  time: string;
};

const ForecastCard = ({ iconCode, temp, time }: ForecastCardProps) => {
  return (
    <View className="flex-col justify-between items-center">
      <Image
        source={weatherConditions[iconCode]}
        className="w-16 h-16"
        resizeMode="contain"
      />
      <View className="flex-col items-center gap-y-1">
        <Text className="text-white font-semibold text-lg">{temp}⁰c</Text>
        <Text className="text-white">{time}</Text>
      </View>
    </View>
  );
};

export default ForecastCard;
