import { Alert } from "react-native";

const alertMessage = (message: string): void =>
  Alert.alert("Error", message, [{ text: "OK", onPress: undefined }]);

export { alertMessage };
