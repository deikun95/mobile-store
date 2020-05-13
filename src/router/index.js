import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/cart",
    name: "vCart",
    component: () => import("../views/vCart"),
  },
  {
    path: "/",
    name: "vMain",
    component: () => import("../views/vMain"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
