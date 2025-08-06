import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    padding: 10,
    margin: 16,
  },
  card: {
    padding: 16,
    backgroundColor: Colors.disabled,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 24,
    marginVertical: 4,
  },
  previewCard: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 16,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
  itemContainer: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  containertext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
  },
  cityText: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  time: { fontSize: 16, color: '#555', marginBottom: 16 },
  icon: { width: 64, height: 64, marginBottom: 12 },
  tempText: { fontSize: 24, fontWeight: 'bold', marginBottom: 6 },
  text: { fontSize: 18, marginVertical: 2 },
});
