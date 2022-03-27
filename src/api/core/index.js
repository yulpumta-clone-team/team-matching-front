import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
});

instance.defaults.timeout = 2500;

instance.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 수행할 로직
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    // config.headers['Authorization'] = ' 토큰 값';
    return config;
  },
  (error) => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.log(error); // 디버깅
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(Error);
  },
);

export default instance;
