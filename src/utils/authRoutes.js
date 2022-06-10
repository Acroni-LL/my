import router from "@/router";
import store from "@/store";
/**
 * @description 生成权限路由completed
 * @param {Array} asyncRoutes
 * @return {Array} authRoutes
 */
export function genAuthRoutes(asyncRoutes) {
  let _pRoutes = [];
  let _cRoutes = [];
  let role = JSON.stringify(store.getters.userInfo.role);
  if (role) {
    filterRoutes(asyncRoutes);
  } else {
    console.log("No role");
  }
  function filterRoutes(asyncRoutes, role) {
    for (let i in asyncRoutes) {
      // 父级路由满足条件push
      if (!asyncRoutes[i].meta) {
        _pRoutes.push(asyncRoutes[i]);
      } else if (
        asyncRoutes[i].meta.role === role ||
        asyncRoutes[i].meta.role === "1"
      ) {
        _pRoutes.push(JSON.parse(JSON.stringify(asyncRoutes[i])));
      }
      if (asyncRoutes[i].children && asyncRoutes[i].children.length > 0) {
        _pRoutes[i].children = [];
        for (let j in asyncRoutes[i].children) {
          if (
            asyncRoutes[i].children[j].meta.role === role ||
            asyncRoutes[i].children[j].meta.role === "1"
          ) {
            _cRoutes.push(asyncRoutes[i].children[j]);
            _pRoutes[i].children.push(_cRoutes[0]);
            _cRoutes = [];
          }
          // PROBLEM
        }
      } else {
        return;
      }
    }
    // console.log("final _pRoutes:", _pRoutes);
  }
  return _pRoutes;
}
// todo 添加权限路由进vuex

export function addRouteOneByOne() {
  const roleRoutes = genAuthRoutes();
  for (let i in roleRoutes) {
    if (!roleRoutes[i].children) {
      router.addRoute();
    } else {
      let _roleRoutes = JSON.parse(JSON.stringify(roleRoutes[i]));
      _roleRoutes.children = null;
      router.addRoute(_roleRoutes);
      for (let j in roleRoutes[i].children[j]) {
        router.addRoute(`${roleRoutes[i].name}`, roleRoutes[i].children[j]);
      }
    }
  }
  console.log(router);
  return router;
}
