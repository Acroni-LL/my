import store from "@/store";
// import { getRole } from "./usual";
/**
 * @description 单一职责，导出权限路由，权限路由过滤
 * @param {Array} asyncRoutes
 * @param {String} role
 * @return {Array} asyncRouter
 * */

export function filterRoleRoutes(asyncRoutes, role) {
  let _routes = [];
  console.log(store);
  // let role = store.getters.userInfo.role || getRole();
  let roleRoutes;
  for (let i in asyncRoutes) {
    //判断父级meta，有判断role，没有meta直接push
    if (asyncRoutes[i].meta) {
      //没有children直接push
      if (!asyncRoutes[i].children) {
        _routes.push(asyncRoutes[i]);
      } else {
        let _cRoutes = [];
        // 有children判断children的role
        for (let j in asyncRoutes[i].children[j]) {
          // 有meta就判断role
          if (asyncRoutes[i].children[j].meta) {
            if (asyncRoutes[i].children[j].meta === role) {
              _cRoutes.push(asyncRoutes[i].children[j]);
            }
          } else {
            // 没meta就push
            _cRoutes.push(asyncRoutes[i].children[j]);
          }
          console.log(_cRoutes);
        }
        _routes[i].children = _cRoutes;
      }
    } else {
      _routes.push(asyncRoutes[i]);
    }
  }
  console.log("_routes:", _routes);
  roleRoutes = _routes;
  return roleRoutes;
}
