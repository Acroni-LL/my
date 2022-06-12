import axios from "axios";

const serviceT = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

/**
 * 请求拦截
 */
serviceT.interceptors.request.use(
  (config) => {
    // console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */

serviceT.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // await store.dispatch('user/logout')
    if (error.response?.status === 404) {
      console.log("404 Not Found");
    }
    // 此处未起作
    return Promise.reject(error);
  }
);

export default serviceT;
