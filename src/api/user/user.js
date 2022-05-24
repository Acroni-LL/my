import request from "@/utils/request";

/**
 * 添加用户
 * @param data
 * @returns {*}
 */
export const addUser = (data) => {
  return request({
    url: "/add/user",
    method: "post",
    data,
  });
};
/**
 * @description 获取用户列表
 * @param params
 * @returns {*}
 */
export const getUserList = (params) => {
  return request({
    url: "/get/user/list",
    params,
  });
};
