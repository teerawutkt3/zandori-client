import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/theme-zendori/css/bootstrap.css";
import "./assets/theme-zendori/css/style.css";
import "./assets/theme-zendori/css/all.css";
import "./assets/theme-zendori/css/font-awesome.css";
import "./assets/theme-zendori/css/brands.css";
import "./assets/theme-zendori/css/etalage.css";
import "./assets/theme-zendori/css/owl.carousel.css";

import components from "./components/BaseComponents/component";
import moment from "moment";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

//==> Buttons component
for (let i = 0; i < components.buttons.length; i++) {
  Vue.component(components.buttons[i].name, components.buttons[i].component);
}
//===> Card component
Vue.component(components.card.name, components.card.component);

Vue.filter("formatDate", function(value) {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
