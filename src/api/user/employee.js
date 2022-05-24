import request from "@/utils/request";

/**
 * @description 获取圆滚滚列表
 * @param params
 * @returns {*}
 */
export const getEmployee = (params) => {
  return request({
    url: "/get/employee",
    params,
  });
};
