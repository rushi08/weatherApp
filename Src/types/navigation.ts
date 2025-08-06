export type RootStackParamList = {
  Home: undefined;
  CityDetails: {
    cityName: string;
    weatherData: {
      temp_c: number;
      condition: string;
      icon: string;
      humidity: number;
      wind_kph: number;
      feelslike_c: number;
      localtime: string;
    };
  };
};
