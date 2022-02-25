import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import Prods from "../pages/Prods.vue"

const routes = [
  {path: "/", component: Main},
  {path: "/products", component: Prods}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
