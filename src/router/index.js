import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../components/Main"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../components/Cart"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("../components/Catalog"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../components/Contacts"),
  },
  {
    path: "/item",
    name: "Item",
    component: () => import("../components/Item"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../components/News"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
