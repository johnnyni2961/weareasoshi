import { Cookies } from 'react-cookie';
import axios from 'axios';

const cookies = new Cookies();
const authToken = cookies.get('auth');

const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  headers: { Authorization: `Bearer ${authToken}` },
});

const testError = (input, error) =>
  error.toLowerCase().search(input.toLowerCase()) > -1 ? true : false;

const transformResponse = (response) => {
  response = response.replace(/\'/g, '');
  return `${response.charAt(0).toUpperCase()}${response.substr(1)}`;
};

export default http;
export { cookies, testError, transformResponse };
