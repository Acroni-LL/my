import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Layout,
    redirect: {
      name: "index",
    },
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
  {
    path: "/user",
    component: Layout,
    redirect: "/user",
    name: "users",
    meta: {
      icon: "users",
      title: "用户数据",
    },
    children: [
      {
        path: "/user/employee",
        component: () => import("@/views/user/employee"),
        name: "userEmployee",
        meta: {
          title: "员工数据",
        },
      },
      {
        path: "/user/user",
        component: () => import("@/views/user/user"),
        name: "userUser",
        meta: {
          title: "用户数据",
        },
      },
      // {
      //   path: "/user/site",
      //   component: () => import("@/views/user/site"),
      //   name: "userSite",
      //   meta: {
      //     title: "场地数据",
      //   },
      // },
      // {
      //   path: "/user/location/planning",
      //   component: () => import("@/views/user/location-planning"),
      //   name: "userLocationPlanning",
      //   meta: {
      //     title: "定位规划",
      //   },
      // },
      // {
      //   path: "/user/map",
      //   component: () => import("@/views/user/map"),
      //   name: "userMap",
      //   meta: {
      //     title: "地图管理",
      //   },
      // },
      // {
      //   path: "/user/user/add",
      //   name: "addUserView",
      //   component: () => import("@/views/user/user/add-user/index"),
      //   hidden: true,
      //   meta: { title: "用户添加" },
      // },
    ],
  },
  // 实验用
  // {
  //   path: "/test",
  //   component: () => import("@/views/test/test1"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
