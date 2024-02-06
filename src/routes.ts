import Test from "./pages/Test.vue";
import Menues from "./pages/Menues.vue";
import Orders from "./pages/Orders.vue";
import SnacksVue from "./pages/Snacks.vue";
import SnacksReportsVue from "./pages/SnacksReports.vue";
import ArabVue from "./pages/Arab.vue";

const routes = [
  { path: "/", component: Test },
  { path: "/menues", component: Menues },
  { path: "/orders", component: Orders },
  { path: "/snacks", component: SnacksVue },
  { path: "/snacks-reports", component: SnacksReportsVue },
  { path: "/arab", component: ArabVue }
];

export default routes;