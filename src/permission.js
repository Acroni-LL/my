import router from "@/router";
import store from "./store";
import { genAuthRoutes } from "./utils/authRoutes";
import asyncRoutes from "./router/asyncRoutes";
router.beforeEach(async (to, from, next) => {
  // todo 加入权限路由逻辑
  if (to.path === "/login") {
    next();
  } else {
    if (store.getters.userInfo.token) {
      let roleRoutes = genAuthRoutes(asyncRoutes);
      console.log("roleRoutes:", roleRoutes);
      // router.addRoutes(await store.dispatch("setAuthRoutes", roleRoutes));
      next();
    } else {
      next("/login");
    }
  }
});
