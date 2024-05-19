import axios from 'axios';

export const requestHeaders = {
  'Access-Control-Allow-Origin': 'origin',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Headers': '*',
  'Content-type': 'application/json',
};

export const errorResponse = {
  message: 'Error message',
  error: 'Not Found',
  statusCode: 404,
  data: null,
};

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3334/api/',
  withCredentials: true,
  // headers: requestHeaders
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error;
    console.log(response);
    console.log(config);
    return response;
  }
);

export default axiosInstance;
