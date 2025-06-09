import {
  ActivityIndicator,
  GestureResponderEvent,
  Text,
  TouchableOpacity,
} from "react-native";

type CustomButtonProps = {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  testID?: string;
};

function CustomButton({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
  testID = "custom-button",
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      testID={testID}
      accessibilityRole="button"
      disabled={isLoading}
      onPress={isLoading ? () => {} : handlePress}
      activeOpacity={0.7}
      className={`bg-gray-50 rounded-full px-3 py-5 my-2 ${containerStyles}`}
    >
      {isLoading ? (
        <ActivityIndicator
          testID="activity-indicator"
          color={"#0F0F0F"}
          className="w-5 h-5 self-center"
        />
      ) : (
        <Text
          testID="button-text"
          className={`text-black text-center font-semibold text-md ${textStyles}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default CustomButton;
