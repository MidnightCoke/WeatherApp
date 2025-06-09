import { View } from "react-native";

const CityCardSkeleton = () => {
  return (
    <View className="h-32 my-2 rounded-3xl bg-gray-50 overflow-hidden flex-row justify-between p-3">
      <View className="flex flex-col justify-between">
        <View>
          <View className="flex-row gap-x-2 items-center mb-1">
            <View className="h-5 w-24 bg-zinc-200 rounded-md" />
            <View className="h-4 w-16 bg-zinc-200 rounded-md" />
            <View className="h-4 w-8 bg-zinc-200 rounded-md" />
          </View>
          <View className="h-3 w-12 bg-zinc-200 rounded-md mb-1" />
        </View>

        <View className="flex-row items-center gap-x-2">
          <View className="w-10 h-10 bg-zinc-200 rounded-full" />
          <View className="h-4 w-16 bg-zinc-200 rounded-md" />
        </View>
      </View>

      <View className="flex items-center justify-between py-1">
        <View className="h-8 w-16 bg-zinc-200 rounded-md mb-2" />
        <View className="flex-row gap-x-2">
          <View className="h-4 w-10 bg-zinc-200 rounded-md" />
          <View className="h-4 w-10 bg-zinc-200 rounded-md" />
        </View>
      </View>
    </View>
  );
};

export default CityCardSkeleton;
