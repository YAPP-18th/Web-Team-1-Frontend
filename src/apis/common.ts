import axios from 'axios';
import checkToken from '#apis/checkToken';
// import { Cookies } from 'react-cookie';

const tokenInstance = axios.create({
  baseURL: 'http://15.165.67.119:9000/api/v1/',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
  },
});

const instance = axios.create({
  baseURL: 'http://15.165.67.119:9000/api/v1/',
});

const refreshInstance = axios.create({
  baseURL: 'http://15.165.67.119:9000/api/v1/',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
    Cookie: `JWT-Refresh-Token=123`,
  },
  withCredentials: true,
});

tokenInstance.interceptors.request.use(checkToken);

export { instance, tokenInstance, refreshInstance };
