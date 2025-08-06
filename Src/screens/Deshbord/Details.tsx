import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './Styles';

type Props = NativeStackScreenProps<RootStackParamList, 'CityDetails'>;

const CityDetails: React.FC<Props> = ({ route }) => {
  const { cityName, weatherData } = route.params;

  return (
    <View style={styles.containertext}>
      <Text style={styles.city}>{cityName}</Text>
      <Text style={styles.time}>Local Time: {weatherData.localtime}</Text>
      <Image source={{ uri: weatherData.icon }} style={styles.icon} />
      <Text style={styles.temp}>Temperature: {weatherData.temp_c}°C</Text>
      <Text style={styles.text}>Condition: {weatherData.condition}</Text>
      <Text style={styles.text}>Feels like: {weatherData.feelslike_c}°C</Text>
      <Text style={styles.text}>Humidity: {weatherData.humidity}%</Text>
      <Text style={styles.text}>Wind: {weatherData.wind_kph} km/h</Text>
    </View>
  );
};

export default CityDetails;
