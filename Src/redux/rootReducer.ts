import { combineReducers } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
