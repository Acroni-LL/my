import store from "@/store";

import { filterRoleRoutes } from "@/utils/route";
import { resetRouter, constantRoutes } from "@/router";
import asyncRoutes from "@/router/asyncRoutes";

/**
 * @description 判断token
 * @return {Boolean}
 *  */
export function hasToken() {
  return !!store.getters.userInfo.token;
}

export function getRole() {
  const role = store.getters.userInfo.role;
  return role;
}
export function handleLoginRoleRouter(role) {
  let roleRoutes = filterRoleRoutes(asyncRoutes, role);
  resetRouter(constantRoutes, roleRoutes);
}
