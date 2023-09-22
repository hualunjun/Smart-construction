import axios from 'axios';
//利用axios的create方法创建axios实例：可以设置基础路径、超时的时间设置
const request = axios.create({
  baseURL: 'http://localhost:8085',
  timeout: 5000,
});
request.interceptors.request.use((config) => {
  // console.log(config);
  return config;
});
//响应拦截器
request.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(new Error(error.message));
  }
);

//导出
export default request;