import Vue from "vue";
import store from "../store/index";

import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pets from "../views/Pets.vue";
import Login from "../views/Login.vue";
import User from "../views/Users.vue";
import Historial from "../views/Historial.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/pets",
    name: "Pets",
    component: Pets,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/users",
    name: "User",
    component: User,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/historial",
    name: "Historial",
    component: Historial,
    meta: {
      requireLogin: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.isAuthenticated
  ) {
    next({ name: "Login", query: { to: to.path } });
  } else {
    next();
  }
});

export default router;
