import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Front from "./components/Front";

Vue.use(VueRouter);

const routes = [{ path: "/", component: Front }];

const router = new VueRouter({ routes });
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
