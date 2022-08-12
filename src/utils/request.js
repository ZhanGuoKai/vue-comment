import axios from 'axios';
import store from '@/store';

const service = axios.create({
  baseURL: '/api',
  timeout: 20000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = store.state.user.token;
    if (token) {
      config.headers.name = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 响应码为 1001 表示成功
    if (!res.code || res.code !== 1001) {
      return Promise.reject(res.msg);
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
