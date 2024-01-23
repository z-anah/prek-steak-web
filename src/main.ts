import "./style/css/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Test from "./pages/Test.vue";
import Menues from "./pages/Menues.vue";
import Orders from "./pages/Orders.vue";
import SnacksVue from "./pages/Snacks.vue";

const routes = [
  { path: "/", component: Test },
  { path: "/menues", component: Menues },
  { path: "/orders", component: Orders },
  { path: "/snacks", component: SnacksVue },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
