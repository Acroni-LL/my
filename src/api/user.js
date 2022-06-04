import request from "@/utils/request";
// import requestLogin from "@/utils/request-login";

/**
 * 登录
 * @param{Object} data 用户的登录数据
 * @returns Promise
 */
export const login = (params) => {
  // return requestLogin({
  return request({
    url: "/oauth/token",
    method: "get",
    params,
  });
};

/**
 * 获取用户信息
 * @returns Promise
 */
export const getUserInfo = () => {
  return request({
    url: "/uc/account/getInfo",
  });
};

/**
 * 登出
 * @returns Promise
 */
export const logOut = () => {
  return request({
    url: "/log/out",
    method: "post",
  });
};
