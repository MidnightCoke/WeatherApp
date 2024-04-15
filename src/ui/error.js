
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


export const ErrorScreen = () => {
  return (
    <View class={styles.errorScreen}>
      <Text>Something Went Wrong..</Text>
      <Text>Check your internet access and location permission.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  errorScreen: {
  },
});