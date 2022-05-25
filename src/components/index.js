import ScreenFull from "./ScreenFull";
import SearchHeader from "./search-header";
import BaseStationManagement from "./Base-Station-Management";

export default {
  install(Vue) {
    Vue.component(SearchHeader.name, SearchHeader);
    Vue.component(BaseStationManagement.name, BaseStationManagement);
    Vue.component("ScreenFull", ScreenFull);
  },
};
