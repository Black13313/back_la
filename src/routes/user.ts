export default [
  {
    name: "UserPage",
    path: "/user",
    component: () => import("../pages/user/UserPage.vue"),
    meta: {
      title: "User Page",
      requireAuth: true
    },
  },
  {
    name: "UserRolePage",
    path: "/user/role",
    component: () => import("../pages/user/role/RolePage.vue"),
    meta: {
      title: "Role Page",
      requireAuth: true
    },
  },
  {
    name: "Document Lance",
    path: "/document/lance",
    component: () => import("../pages/Document/Document_lance.vue"),
    meta: {
      title: "Document Lance Page",
      requireAuth: true
    },
  },
];
