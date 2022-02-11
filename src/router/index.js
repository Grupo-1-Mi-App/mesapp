import Vue from "vue";
import VueRouter from "vue-router";
import { guardMyroute } from "../firebase/auth.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      guardMyroute(to, from, next)
  },
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
    beforeEnter: (to, from, next) => {
        guardMyroute(to, from, next)
    },
  },
  {
    path: "/qr",
    name: "QR",
    component: () => import("../views/QR.vue"),
  },
  {
    path: "/admin_menu",
    name: "admMenu",
    component: () => import("../views/AdminMenu.vue"),
    beforeEnter: (to, from, next) => {
      guardMyroute(to, from, next)
    },
  },
  {
    path: "/waiter",
    name: "Waiter",
    component: () => import("../views/Waiter.vue"),
    beforeEnter: (to, from, next) => {
      guardMyroute(to, from, next)
    },
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
