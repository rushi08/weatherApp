/**
 * @format
 */
import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../config';
console.log('API_URL: ', API_URL);

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  request => {
    request.headers.Authorization = '';

    console.log('request: ', request);
    return request;
  },
  (error: AxiosError) => {
    console.log('error: ', error);
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('client response: ', JSON.stringify(response?.data, null, 2));
    if (response.data.error) {
      return Promise.reject(response.data);
    }

    return Promise.resolve(response.data);
  },
  async (error: AxiosError) => {
    console.log('error: ', error);
    return Promise.reject(error.response?.data);
  },
);

export default apiClient;
