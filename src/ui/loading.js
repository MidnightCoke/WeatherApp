import {View} from 'react-native';
import {WeatherAnimation} from '../components/weatherAnimation';


export const LoadingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <WeatherAnimation />
  </View>
  )
};
