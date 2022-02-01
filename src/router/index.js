import Vue from "vue";
import VueRouter from "vue-router";
import { observador } from '../firebase/auth.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
  },
  {
    path: "/qr",
    name: "QR",
    component: () => import("../views/QR.vue"),
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../views/Login.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  observador(to, next);
});

export default router;
