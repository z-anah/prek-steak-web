import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Test from "./pages/Test.vue";
import Test2Vue from "./pages/Test2.vue";

const routes = [
  { path: "/", component: Test },
  { path: "/about", component: Test2Vue },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
