import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// bootstrap-vue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

//AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100
    });
  },
  render: h => h(App)
}).$mount("#app");
