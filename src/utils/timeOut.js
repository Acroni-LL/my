/**
 * 检查token是否过期
 */
import { getTimeStamp } from "@/utils/auth";
import { tokenOvertime } from "@/settings";
// 定义超时时间s
const TimeOut = tokenOvertime || 1800;
/**
 * @description 检查token是否超时
 * @returns {boolean}
 */
export const isCheckTimeOut = () => {
  const currentTime = Date.now();
  const timeStamp = getTimeStamp() || 0;
  return (currentTime - timeStamp) / 1000 > TimeOut;
};
