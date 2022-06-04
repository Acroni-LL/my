import router from "@/router";
import store from "./store";

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    if (store.getters.userInfo.token) {
      next();
    } else {
      next("/login");
    }
  }
});
