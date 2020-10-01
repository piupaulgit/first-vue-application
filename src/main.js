import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import moment from "moment";

import Front from "./components/Front";
import Profile from "./components/Profile";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// date format
Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("MM/DD/YYYY");
  }
});

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
