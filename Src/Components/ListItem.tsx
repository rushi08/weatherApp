import { Text, View } from 'react-native';
import { styles } from '../screens/Deshbord/Styles';

export const renderCityItem = ({ item }: any) => (
  <View style={styles.card}>
    <Text style={styles.city}>
      {item.location.name}, {item.location.country}
    </Text>
    <Text style={styles.temp}>{item.current.temp_c}°C</Text>
    <Text>{item.current.condition.text}</Text>
  </View>
);
