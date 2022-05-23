import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Layout,
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard", affix: true },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
