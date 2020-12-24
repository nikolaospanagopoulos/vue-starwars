import Vue from "vue";
import router from "./router/index";
import App from "./App.vue";
import JsonCSV from "vue-json-csv";
import VueParticles from "vue-particles";

Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.component("downloadCsv", JsonCSV);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
