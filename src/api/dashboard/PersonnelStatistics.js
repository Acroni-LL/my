import request from "@/utils/request";

/**
 * 获取用户信息
 * @returns Promise
 */
export const getPersonnelStatisticsData = () => {
  return request({
    url: "/dash/personnelStatistics",
  });
};
