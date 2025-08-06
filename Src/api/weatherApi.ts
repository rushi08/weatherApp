import ApiCLient from './index';
import { API_KEY } from '../config';
export const WeatherApi = {
  getWeather: async (location: string) => {
    try {
      const response = await ApiCLient.get(
        `/current.json?key=${API_KEY}&q=${location}`,
      );
      return response;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  },
};
