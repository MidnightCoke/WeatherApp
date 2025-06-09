import { View } from "react-native";

const WeatherInfoSkeleton = () => {
  return (
    <View className="flex-1 flex-col gap-y-5 mx-2 p-5">
      <View className="flex items-start justify-center mt-3 gap-y-1">
        <View className="w-40 h-6 bg-white/30 rounded-md" />
        <View className="flex-row items-center gap-x-2 mt-2">
          <View className="w-6 h-6 bg-white/30 rounded-full" />
          <View className="w-28 h-5 bg-white/30 rounded-md" />
          <View className="w-12 h-5 bg-white/30 rounded-md" />
        </View>
      </View>

      <View className="gap-y-3">
        <View className="w-36 h-24 bg-white/30 rounded-md" />
        <View className="flex-row items-center gap-x-4">
          <View className="w-20 h-20 bg-white/30 rounded-full" />
          <View className="w-32 h-6 bg-white/30 rounded-md" />
        </View>
      </View>
    </View>
  );
};

export default WeatherInfoSkeleton;
