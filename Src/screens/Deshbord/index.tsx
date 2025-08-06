import { RootState } from '../../redux/store';
import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { WeatherApi } from '../../api/weatherApi';
import { addCity } from '../../redux/slices/weatherSlice';
import { styles } from './Styles';
import { renderItem } from '../../Components/CityItem';

const Deshbord = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState('');
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.weather.cities);

  useEffect(() => {
    cities.forEach(city => fetchWeather(city));
  }, []);

  const fetchWeather = async (location: string) => {
    try {
      setLoading(true);
      const response = await WeatherApi.getWeather(location);
      setWeatherData(prev => [
        response,
        ...prev.filter(item => item.location.name !== location),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCity = () => {
    if (searchText.trim()) {
      dispatch(addCity(searchText.trim()));
      fetchWeather(searchText.trim());
      setSearchText('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter city"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddCity} style={styles.button}>
        <Text style={styles.buttonText}>Add City</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={weatherData}
          renderItem={({ item }) => renderItem({ item, navigation })}
        />
      )}
    </SafeAreaView>
  );
};

export default Deshbord;
