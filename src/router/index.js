import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* 
ROLE
0 for employee
1 for  all
2 for admin
 */
export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  },

  // {
  //   path: "/test",
  //   component: () => import("@/views/test/test1"),
  // },
];

const router = new VueRouter({
  routes: constantRoutes,
});

export function resetRouter(constantRoutes, asyncRoutes) {
  const newRouter = () =>
    new VueRouter({
      routes: [...constantRoutes, ...asyncRoutes],
    });
  router.matcher = newRouter.matcher;
}

export default router;
