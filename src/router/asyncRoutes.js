// import { formatRoleRoutes } from "@/utils/usual";
// import { hasToken } from "@/utils/usual";
// import store from "@/store";
// import Layout from "@/layout";

let asyncRoutes = [
  {
    path: "/",
    component: () => import("@/layout"),
    meta: { role: "1" },
    // redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard", affix: true, role: "1" },
      },
    ],
  },
  {
    path: "/user",
    component: () => import("@/layout"),

    // redirect: "/user/user",
    name: "users",
    meta: {
      icon: "users",
      title: "用户数据",
      role: "1",
    },
    children: [
      {
        path: "/user/employee",
        component: () => import("@/views/user/employee"),
        name: "userEmployee",
        meta: {
          title: "员工数据:all",
          role: "1", // 1 for all
        },
      },
      {
        path: "/user/employee",
        component: () => import("@/views/user/employee"),
        name: "userEmployee",
        meta: {
          title: "员工数据2:employee",
          role: "0", // 0 for employee
        },
      },
      {
        path: "/user/employee",
        component: () => import("@/views/user/employee"),
        name: "userEmployee",
        meta: {
          title: "员工数据3:admin",
          role: "2", // for 2 for admin
        },
      },
      {
        path: "/user/user",
        component: () => import("@/views/user/user"),
        name: "userUser",
        meta: {
          title: "用户数据:admin",
          role: "2",
        },
      },
      {
        path: "/user/user",
        component: () => import("@/views/user/user"),
        name: "userUser",
        meta: {
          title: "用户数据3:employee",
          role: "0",
        },
      },
      {
        path: "/user/site",
        component: () => import("@/views/user/user"),
        // component: () => import("@/views/user/site"),
        name: "userSite",
        meta: {
          title: "用户数据2:all",
          role: "1",
          // title: "场地数据",
        },
      },
    ],
  },
];

export default asyncRoutes;
