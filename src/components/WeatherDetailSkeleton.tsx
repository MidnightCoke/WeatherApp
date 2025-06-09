import React from "react";
import { View } from "react-native";

const WeatherDetailSkeleton = () => {
  return (
    <View className="flex-1 justify-center items-center rounded-lg">
      <View className="flex justify-around py-5 gap-y-5 px-5 flex-col w-4/5 rounded-3xl bg-black/70">
        <View className="flex-row justify-around items-center">
          {[...Array(3)].map((_, i) => (
            <View key={i} className="flex-col items-center gap-y-2">
              <View className="w-6 h-6 bg-white/30 rounded-full" />
              <View className="w-20 h-4 bg-white/30 rounded-md" />
              <View className="w-14 h-4 bg-white/30 rounded-md" />
            </View>
          ))}
        </View>

        <View className="flex-row justify-around items-center">
          {[...Array(2)].map((_, i) => (
            <View key={i} className="flex-row items-center gap-x-2">
              <View className="w-6 h-6 bg-white/30 rounded-full" />
              <View className="flex-col gap-y-2">
                <View className="w-16 h-4 bg-white/30 rounded-md" />
                <View className="w-20 h-4 bg-white/30 rounded-md" />
              </View>
            </View>
          ))}
        </View>

        <View className="flex-row justify-around items-center">
          {[...Array(3)].map((_, i) => (
            <View
              key={i}
              className="flex-col items-center gap-y-1 p-2 rounded-md bg-white/20"
            >
              <View className="w-10 h-10 bg-white/30 rounded-full" />
              <View className="w-10 h-4 bg-white/30 rounded-md" />
              <View className="w-12 h-4 bg-white/30 rounded-md" />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default WeatherDetailSkeleton;
