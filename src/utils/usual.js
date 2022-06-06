import store from "@/store";

/**
 * @description 判断token
 * @return {Boolean}
 *  */
export function hasToken() {
  console.log("hasToken=>store:", store);
  return !!store.getters.userInfo.token;
}

/**
 * @description 单一职责，导出权限路由，权限路由过滤
 * @param {Array}
 * */
// TODO Description 权限路由过滤
export function formatRoleRoutes(asyncRoutes) {
  let pRoutes = [];
  // let routes = [];
  let cRoutes = [];
  if (hasToken) {
    for (let i in asyncRoutes) {
      if (
        !asyncRoutes[i].meta.role ||
        asyncRoutes[i].meta.role === store.getters.userInfo.role
      ) {
        // console.log(asyncRoutes[i]);
        pRoutes.push(asyncRoutes[i]);
        if (asyncRoutes[i].children) {
          for (let j in asyncRoutes[i].children) {
            if (
              !asyncRoutes[i].children[j].meta.role ||
              asyncRoutes[i].children[j].meta.role ===
                store.getters.userInfo.role
            ) {
              cRoutes.push(asyncRoutes[i].children[j]);
              console.log("cRoutes:", cRoutes);
            }
          }
        }
        pRoutes[i].children.concat(...cRoutes);
        console.log("pRoutes:", pRoutes);
      }
      // console.log(routes);
      let asyncRouter = pRoutes;
      return asyncRouter;
    }
  } else {
    this.$router.push("/login");
  }
  // return (routes = routes.concat(constantRoutes));
}
