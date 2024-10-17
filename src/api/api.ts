import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import AuthUtils from '../utils/auth-utils';
import { useNavigate } from 'react-router-dom';

const createApiInstance = (): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: "http://localhost:8080/api",
    timeout: 60 * 1000
  };

  const instance = axios.create(config);
  // tslint:disable-next-line: no-shadowed-variable
  instance.interceptors.request.use(async (config) => {
    const token = AuthUtils.getToken();
    if (token) {
        if (config.headers == null) {
            config.headers = {} as AxiosRequestHeaders;
        }
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 403) {
        AuthUtils.removeToken();
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const api = createApiInstance();

export default api;
