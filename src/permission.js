import router from "@/router";
import store from "./store";
// import { addRouteOneByOne, genAuthRoutes } from "./utils/authRoutes";
// import asyncRoutes from "./router/asyncRoutes";
import { resetRouter } from "./router/index";

// router.beforeEach(async (to, from, next) => {
//   // todo 加入权限路由逻辑
//   if (to.path === "/login") {
//     next();
//   } else {
//     if (store.getters.userInfo.token) {
//       // let roleRoutes = genAuthRoutes(asyncRoutes);
//       // todo 添加路由到vuex
//       // console.log("roleRoutes:", roleRoutes);
//       // 获取使用addroute的动态
//       // addRouteOneByOne();
//       router.addRoute({
//         path: "/index",
//         name: "index",
//         component: () => import("@/views/dashboard/index"),
//         meta: { title: "首页", icon: "dashboard", affix: true, role: "1" },
//       });
//       console.log(router);
//       // next({ ...to, replace: true });
//       resetRouter();
//     } else {
//       next("/login");
//     }
//   }
// });
