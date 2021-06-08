import axios from 'axios';
import checkToken, { checkRefreshAccessToken } from '#apis/checkToken';

const tokenInstance = axios.create({
  baseURL: 'http://15.165.67.119/api/v1/',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
  },
});

const instance = axios.create({
  baseURL: 'http://15.165.67.119/api/v1/',
});

const refreshInstance = axios.create({
  baseURL: 'http://15.165.67.119/api/v1/',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
  },
});

tokenInstance.interceptors.request.use(checkToken);
refreshInstance.interceptors.request.use(checkRefreshAccessToken);
export { instance, refreshInstance, tokenInstance };
