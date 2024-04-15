import LottieView from 'lottie-react-native';

const forecastAnimationJson = require('../../assets/Animation/forecast-animation.json');

export const WeatherAnimation = () => {
  return (
    <LottieView
      source={forecastAnimationJson}
      style={{width: '100%', height: '100%'}}
      autoPlay
      loop
    />
  );
};
