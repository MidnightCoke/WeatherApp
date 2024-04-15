import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCompass,
  faDroplet,
  faMoon,
  faSun,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import {faThermometer2} from '@fortawesome/free-solid-svg-icons/faThermometer2';
import {formatUnixDate, formatUnixTime} from '../utils/unixTime';


import {weatherIcons} from '../constants/weatherIcons';
import {bgImage, defaultBgImage} from '../constants/bgImage';



export const WeatherUI = f => {
  return (
    <ImageBackground
      source={bgImage[f.forecast.list[0].weather[0].main] ? bgImage[f.forecast.list[0].weather[0].main] : defaultBgImage}
      resizeMode="cover"
      style={styles.image}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        {/* SECTION MAIN WEATHER */}
        <View style={styles.mainWeather}>
          <Text style={styles.dateText}>
            {formatUnixDate(f.forecast.list[0].dt)}
          </Text>

          {/* SECTION LOCATION */}
          <View style={styles.flexRowLocation}>
            <Pressable onPress={() => {}}>
              <FontAwesomeIcon icon={faCompass} color="#FFFFFF" />
            </Pressable>

            <Text style={styles.locText}>{f.forecast.city.name}</Text>
            
          </View>

          {/* SECTION WEATHER INFO */}
          <View style={styles.mainWeather}>
            <Text style={styles.mainWeatherCelcius}>
              {Math.floor(f.forecast.list[0].main.temp)}
              {'°c'}
            </Text>
            <View style={styles.flexRowLocation}>
              <Image
                style={styles.mainWeatherConditionIcon}
                source={weatherIcons[f.forecast.list[1].weather[0].icon]}
              />
              <Text style={styles.locText}>
                {f.forecast.list[0].weather[0].description}
              </Text>
            </View>
          </View>
        </View>

        {/* SECTION DETAILS */}
        <View style={styles.detailContainer}>
          <View style={styles.flexRow}>
            <View style={styles.flexColItemBorder}>
              <FontAwesomeIcon icon={faWind} color="#FFFFFF" />
              <Text style={styles.detailWeatherText}>Wind {'(km/h)'}</Text>
              <Text style={styles.detailWeatherText}>{f.forecast.list[0].wind.speed}</Text>
            </View>
            <View style={styles.flexColItemBorder}>
              <FontAwesomeIcon icon={faDroplet} color="#FFFFFF" />
              <Text style={styles.detailWeatherText}>Humidty {'(%)'}</Text>
              <Text style={styles.detailWeatherText}>{f.forecast.list[0].main.humidity}</Text>
            </View>
            <View style={styles.flexColItem}>
              <FontAwesomeIcon icon={faThermometer2} color="#FFFFFF" />
              <Text style={styles.detailWeatherText}>Feels Like</Text>
              <Text style={styles.detailWeatherText}>
                {Math.floor(f.forecast.list[0].main.feels_like)}
                {'°c'}
              </Text>
            </View>
          </View>
          <View style={styles.flexRowDayLight}>
            <View style={styles.flexColItem}>
              <Text style={styles.detailWeatherText}>Sunrise</Text>

              <View style={styles.flexRow}>
                <FontAwesomeIcon icon={faSun} color="#FFFFFF" />
                <Text style={styles.ph5}>
                  {formatUnixTime(f.forecast.city.sunrise)}
                </Text>
              </View>
            </View>

            <View style={styles.flexColItem}>
              <Text style={styles.detailWeatherText}>Sunset</Text>

              <View style={styles.flexRow}>
                <FontAwesomeIcon icon={faMoon} color="#FFFFFF" />
                <Text style={styles.ph5}>
                  {formatUnixTime(f.forecast.city.sunset)}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.flexRowInfo}>
            <View style={styles.flexColItem}>
              <Image
                style={styles.weatherConditionIcon}
                source={weatherIcons[f.forecast.list[1].weather[0].icon]}
              />
              <Text style={styles.detailWeatherText}>
                {Math.floor(f.forecast.list[1].main.temp)}
                {'°c'}
              </Text>
              <Text style={styles.detailWeatherText}>{formatUnixTime(f.forecast.list[1].dt)}</Text>
            </View>
            <View style={styles.flexColItem}>
              <Image
                style={styles.weatherConditionIcon}
                source={weatherIcons[f.forecast.list[2].weather[0].icon]}
              />
              <Text style={styles.detailWeatherText}>
                {Math.floor(f.forecast.list[2].main.temp)}
                {'°c'}
              </Text>
              <Text style={styles.detailWeatherText}>{formatUnixTime(f.forecast.list[2].dt)}</Text>
            </View>
            <View style={styles.flexColItem}>
              <Image
                style={styles.weatherConditionIcon}
                source={weatherIcons[f.forecast.list[3].weather[0].icon]}
              />
              <Text style={styles.detailWeatherText}>
                {Math.floor(f.forecast.list[3].main.temp)}
                {'°c'}
              </Text>
              <Text style={styles.detailWeatherText}>{formatUnixTime(f.forecast.list[3].dt)}</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',

    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 36,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  mainWeather: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center'
  },
  flexRowDayLight: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    paddingVertical: 8,
    marginVertical: 12
  },
  flexRowInfo: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  flexCol: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  flexColItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  flexColItemBorder: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8,

    borderRightWidth: 0.3,
    borderColor: '#FFFFFF',
  },

  flexRowLocation: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 4,
  },
  mainWeatherCelcius: {
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    fontSize: 105
  },
  locText: {
    fontSize: 20,
    fontFamily: 'Inter-Regular',
    textTransform: 'capitalize',
    paddingHorizontal: 6,
    color: '#FFFFFF',
  },
  dateText: {
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    fontSize: 18,
    paddingHorizontal: 4,
  },
  ph5: {
    paddingHorizontal: 5,
    fontFamily: 'Inter-Regular',
    paddingVertical: 2,
    fontSize: 11,
    color: '#FFFFFF',
  },
  detailWeatherText: {
    fontSize: 11,
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
  },
  detailContainer: {
    flex: 1,
    padding: 23,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  mainWeatherConditionIcon: {
    width: 40,
    height: 40,
    marginRight: -8
  },
  weatherConditionIcon: {
    width: 60,
    height: 60,
    marginBottom: -15
  },
});

