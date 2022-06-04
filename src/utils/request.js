import axios from "axios";
import store from "@/store";
import { removeTimeStamp, setTimeStamp } from "@/utils/auth";
import router from "@/router";
import { Message } from "element-ui";
import { isCheckTimeOut } from "@/utils/timeOut";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

/**
 * 请求拦截
 */
service.interceptors.request.use(
  async (config) => {
    if (store.getters.token) {
      if (isCheckTimeOut()) {
        await store.dispatch("user/logout");
        // 强制跳转到login
        router.push("/login");
        return Promise.reject(new Error("登录过长"));
      }
      // 请求头添加token
      config.headers["Authorization"] = `Bearer ${store.getters.token}`;
      // 请求体添加token
      config.params = Object.assign({}, config.params, {
        access_token: store.getters.token,
      });
    }
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

service.interceptors.response.use(
  (response) => {
    // 只要返回正确的数据更新时间戳
    setTimeStamp();
    // console.log(response.request.responseURL)
    // 如果返回的data类型为blod
    if (response.data instanceof Blob) {
      return response.data;
    }

    // 只要返回正常的数据，都重置时间戳
    //
    // 由于天气API的返回数据不一致，此处进行正则判定是否未天气API
    // if (/https:\/\/yiketianqi.com\/api\.*/.exec(response.request?.responseURL)) {
    //   const { data } = response
    //   return data
    // }

    // 登录接口返回的数据和理想数据不一致，此处进行封装
    // if (/\/oauth\/token\.*/.exec(response.request?.responseURL)) {
    //   const { data: { access_token: token }} = response
    //   return { token }
    // }

    // 如果数据达到理想状态，封装数据
    const {
      data: { code, success, msg, data },
    } = response;
    if (success) {
      return { code, success, msg, data };
    } else {
      Message.error(msg);
      return Promise.reject(new Error(msg));
    }
  },
  async (error) => {
    // await store.dispatch('user/logout')
    if (error.response?.status === 404) {
      removeTimeStamp();
      store.commit("user/removeToken");
      return router.push("/login");
    }
    // 此处未起作用
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 10002
    ) {
      // 当等于10002的时候 表示 后端告诉我token超时了
      await store.dispatch("user/logout"); // 登出action 删除token
      router.push("/login");
    } else {
      Message.error(error.message); // 提示错误信息
    }
    return Promise.reject(error);
  }
);

export default service;
