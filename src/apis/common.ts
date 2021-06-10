import axios from 'axios';
import { checkTokenIntercepter, putExpiredAccessTokenIntercepter } from '#apis/checkToken';

// 유효한 토큰으로 요청하는 instance
const tokenInstance = axios.create({
  baseURL: 'http://15.165.67.119/api/v1/',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
  },
});

// 토큰 없이 요청하는 instance
const instance = axios.create({
  baseURL: 'http://15.165.67.119/api/v1/',
});

// 만료 토큰으로 요청하는 instance (token refresh용)
// tokenInstance에는 토큰유효기간 확인 인터셉터가 붙었으므로, 인터셉터 없는 버전 instance가 필요해서 만듬.
const refreshInstance = axios.create({
  baseURL: 'http://15.165.67.119/api/v1/',
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('accessToken')}`,
  },
});

tokenInstance.interceptors.request.use(checkTokenIntercepter);
refreshInstance.interceptors.request.use(putExpiredAccessTokenIntercepter);

export { instance, refreshInstance, tokenInstance };
