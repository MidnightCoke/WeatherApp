import { alertMessage } from "@/src/components/AlertMessage";
import GetLocation from "react-native-get-location";
import { LocationErrorMessages } from "../constants/location-error-messages";
import { CustomLocation } from "../types/location";

const getLocation = (): Promise<CustomLocation | void> =>
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 30000,
  })
    .then((location) => {
      return {
        lat: location.latitude,
        lon: location.longitude,
      };
    })
    .catch((error) => {
      switch (error.code) {
        case "CANCELLED":
          alertMessage(LocationErrorMessages.CANCELLED);
          break;
        case "UNAVAILABLE":
          alertMessage(LocationErrorMessages.UNAVAILABLE);
          break;
        case "TIMEOUT":
          alertMessage(LocationErrorMessages.TIMEOUT);
          break;
        case "UNAUTHORIZED":
          alertMessage(LocationErrorMessages.UNAUTHORIZED);
          break;
        default:
          alertMessage(LocationErrorMessages.UNKNOWN);
      }
    });

export { getLocation };
