import { createRouter, createWebHashHistory } from "vue-router";
import product from './product'
import user from './user'
import {userStore} from "../stores/user.ts";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../pages/HomePage.vue"),
    meta: {
      title: "Home Page",
      requireAuth: true
    },
  },
  {
    name: "SellPage",
    path: "/sell",
    component: () => import("../pages/SellPage.vue"),
    meta: {
      title: "Sell Page",
      requireAuth: true
    },
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/NotFoundPage.vue"),
    meta: {
      title: "Page not found",
    },
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../pages/LoginPage.vue"),
    meta: {
      title: "Login Page",
    },
  },
  {
    name: "RegisterVerifyPage",
    path: "/register/verify",
    component: () => import("../pages/VerifyPage.vue"),
    meta: {
      title: "Register Verify Page",
    },
  },
  {
    name: "ForgotPasswordVerifyPage",
    path: "/forgot-password/verify",
    component: () => import("../pages/VerifyPage.vue"),
    meta: {
      title: "Forgot Password Verify Page",
    },
  },
  ...product,
  ...user,
];

const index = createRouter({
  history: createWebHashHistory(),
  routes,
});

index.beforeEach(async (to, from, next) => {
  console.log('to', to);
  console.log('from', from);

  const auth = userStore()
  const requireLogin = to.matched.some((record) => record.meta.requireAuth)

  if (requireLogin && Object.keys(auth.user).length <= 0) {
    next('/login')
  } else {
    next()
  }
})

export default index;
