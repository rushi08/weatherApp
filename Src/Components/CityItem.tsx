import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../screens/Deshbord/Styles';

export const renderItem = ({ item, navigation }: any) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() =>
      navigation.navigate('CityDetails', {
        cityName: item.location.name,
        weatherData: {
          temp_c: item.current.temp_c,
          condition: item.current.condition.text,
          icon: `https:${item.current.condition.icon}`,
          humidity: item.current.humidity,
          wind_kph: item.current.wind_kph,
          feelslike_c: item.current.feelslike_c,
          localtime: item.location.localtime,
        },
      })
    }
  >
    <Text style={styles.cityName}>{item.location.name}</Text>
    <Text style={styles.temp}>{item.current.temp_c}°C</Text>
  </TouchableOpacity>
);
