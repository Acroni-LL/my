import ScreenFull from "./ScreenFull";
import SearchHeader from "./search-header";

export default {
  install(Vue) {
    Vue.component(SearchHeader.name, SearchHeader);
    Vue.component("ScreenFull", ScreenFull);
  },
};
