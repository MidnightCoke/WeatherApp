import {Alert} from 'react-native';

const alertMessage = (message) =>
Alert.alert('Error', message, [
 
  {text: 'OK', onPress: () => {}},
]);

export {alertMessage}