import Vue from "vue";

import App from "@/App.vue";
import store from "@/store";
import router from "@/router";
import { Loading } from "element-ui";

Vue.config.productionTip = false;

Vue.use(Loading);
Vue.use(Loading.directive);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
