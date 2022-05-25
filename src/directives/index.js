/**
 *这是定义的自定义指令
 **/

import { imageerror } from "./imageerror";
import { sticky } from "./sticky";

export default {
  install(Vue) {
    Vue.directive("imageerror", imageerror);
    Vue.directive("sticky", sticky);
  },
};
