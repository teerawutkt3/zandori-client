import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
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
