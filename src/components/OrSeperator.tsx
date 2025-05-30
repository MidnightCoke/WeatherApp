import { Text, View } from "react-native";
import i18n from "../utils/i18n";

function OrSeperator() {
  return (
    <View className="flex w-3/4 items-center flex-row my-5">
      <View className="flex-1 h-[1px] bg-gray-300 rounded-xl" />
      <Text className="mx-2  font-bold text-sm text-white">
        {i18n.t("other.or")}
      </Text>
      <View className="flex-1 h-[1px] bg-gray-300 rounded-xl" />
    </View>
  );
}

export default OrSeperator;
