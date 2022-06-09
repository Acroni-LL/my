import store from "@/store";

/**
 * @description 判断token
 * @return {Boolean}
 *  */
export function hasToken() {
  return !!store.getters.userInfo.token;
}
