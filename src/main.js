import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";

import Front from "./components/Front";
import Profile from "./components/Profile";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  { path: "/", component: Front },
  { path: "/profile/:userName", component: Profile },
];

const router = new VueRouter({ routes });
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
