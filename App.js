import React, {useState, useEffect} from 'react';
import {Button, View, ScrollView, StyleSheet, RefreshControl} from 'react-native';

import {getWeatherDataByLocation} from './src/services/apiCall';
import {getLocation} from './src/services/location';
import {LoadingScreen} from './src/ui/loading';
import {WeatherUI} from './src/ui/weather';
import {ErrorScreen} from './src/ui/error';


const App = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState(null);
  const [locationFetched, setLocationFetched] = useState(false);

  useEffect(() => {
    setForecastByLocation();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await setForecastByLocation();
    setRefreshing(false);
  };

  const setWeatherData = async l => {
    let data = await getWeatherDataByLocation(l);
    setForecastData(data);
  };

  const setForecastByLocation = async () => {
    if (!locationFetched) {
      setLoading(true);
      const loc = await getLocation();
      if (loc) {
        setLocation(loc);
        setLocationFetched(true);

        await setWeatherData(loc);
      }
    }
    if (locationFetched && location) {
      await setWeatherData(location);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <LoadingScreen />
    );
  }

  if (forecastData) {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <WeatherUI forecast={forecastData} />
      </ScrollView>
    );
  }

  return (
    <View style={styles.errorScreen}>
      <ErrorScreen />
      <Button
      style={styles.errorButton}
        onPress={setForecastByLocation}
        title="Get Forecast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  errorScreen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  errorButton: {
  }
});

export default App;
