import Cookies from "js-cookie";

/**
 * token的key值
 * */
const TokenKey = "com.hxyd";
const timeKey = "com.hxyd.time";

/**
 * 向cookie中设置token值
 * @param{String} token
 * @returns {*}
 */
export const setToken = (token) => {
  return Cookies.set(TokenKey, token);
};

/**
 * 读取时间戳
 * @returns {DOMTimeStamp}
 */
export const getTimeStamp = () => {
  return Cookies.get(timeKey);
};

/**
 * 设置时间戳
 * @returns {*}
 */
export const setTimeStamp = () => {
  return Cookies.set(timeKey, Date.now());
};

export const removeTimeStamp = () => {
  return Cookies.remove(timeKey);
};
