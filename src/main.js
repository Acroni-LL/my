import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/styles/index.scss"; // global css
import "@/icons"; // icon
import Components from "@/components";
import * as echarts from "echarts";
import directives from "@/directives";
import "@/permission";

Vue.config.productionTip = false;

Vue.use(Components);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.use(directives);
Vue.use(store);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
