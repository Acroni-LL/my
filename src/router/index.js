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
    component: () => import("../views/login/index.vue"),
  },
];

const router = new VueRouter({
  routes: constantRoutes,
});

export function resetRouter(asyncRoutes) {
  const newRouter = () =>
    new VueRouter({
      routes: [...constantRoutes, ...asyncRoutes],
    });
  router.matcher = newRouter.matcher;
  console.log("resetRouter:", router);
  return router;
}

export default router;
