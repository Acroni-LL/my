<template>
  <div class="index-container">
    <div class="index-header">
      <title-box />
    </div>
    <div class="index-body">
      <!-- <div class="index-body-item">
        <personnel-location-statistics />
      </div> -->
      <div class="index-body-item">
        <personnel-statistics />
      </div>
      <!-- <div class="index-body-item">
        <broadcast-statistics />
      </div> -->
      <div class="index-body-item">
        <attendance />
      </div>
      <div class="index-body-item">
        <line-demo />
      </div>
      <!-- <div class="index-body-item">
        <alarm-statistics />
      </div>
      <div class="index-body-item">
        <personnel-stay-statistics />
      </div>
      <div class="index-body-item">
        <epidemic-control />
      </div>
      <div class="index-body-item">
        <project-statistics />
      </div>
      <div class="index-body-item">
        <sport />
      </div> -->
    </div>
  </div>
  <!-- <div v-else class="mobile">
    <div class="m-header">
      <div class="text">{{ title }}</div>
    </div>
    <div class="m-body">
      <div class="m-item">
        <personnel-statistics />
      </div>
      <div class="m-item">
        <broadcast-statistics />
      </div>
      <div class="m-item">
        <attendance />
      </div>

      <div class="m-item">
        <alarm-statistics />
      </div>
      <div class="m-item">
        <personnel-stay-statistics />
      </div>
      <div class="m-item">
        <epidemic-control />
      </div>
      <div class="m-item">
        <project-statistics />
      </div>
      <div class="m-item">
        <sport />
      </div>
      <div class="m-item">
        <personnel-location-statistics />
      </div>
    </div>
  </div> -->
</template>

<script>
import titleBox from "./components/title";
// import AlarmStatistics from "./components/alarm-statistics";
import PersonnelStatistics from "./components/personnel-statistics";
// import PersonnelLocationStatistics from "./components/personnel-location-statistics";
// import PersonnelStayStatistics from "./components/personnel-stay-statistics";
// import EpidemicControl from "./components/epidemic-control";
import Attendance from "./components/attendance";
// import BroadcastStatistics from "./components/broadcast-statistics";
// import ProjectStatistics from "./components/project-statistics";
// import Sport from "./components/sport";
import lineDemo from "./demo/line-demo";
// 获取设置中title设置给平台
import { title } from "@/settings";

export default {
  name: "Index",
  components: {
    lineDemo,
    titleBox,
    // AlarmStatistics,
    PersonnelStatistics,
    // PersonnelLocationStatistics,
    // PersonnelStayStatistics,
    // EpidemicControl,
    Attendance,
    // BroadcastStatistics,
    // ProjectStatistics,
    // Sport,
  },
  computed: {},
  data() {
    return {
      title,
      deviceType: false,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.index {
  &-container {
    width: 100%;
    height: 100%;
    background: rgba(1, 13, 188);
    background-size: cover;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }

  &-header {
    width: 100%;
    height: 10%;
  }

  &-body {
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    &-item {
      width: 32.5%;
      height: 32.5%;
      box-sizing: border-box;
      border: 1px solid rgba(25, 186, 139, 0.17);
      background: rgba(255, 255, 255, 0.04)
        url("@/assets/common/index/line.png");
      padding: 10px;
    }

    &-item:nth-child(2) {
      box-sizing: border-box;
      padding: 1rem;
      border: unset;
    }
  }
}

.mobile {
  width: 100%;
  background: rgba(1, 13, 188);
  color: #ffffff;

  .m-header {
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: -1px;
    background: url("@/assets/common/index/header.png") center center;
    background-size: cover;

    .text {
      text-align: center;
      color: #ffffff;
      font-weight: 600;
      font-size: 1rem;
    }
  }

  .m-body {
    width: 100vw;

    .m-item {
      width: 100vw;
      height: 30vh;
      box-sizing: border-box;
      border: 1px solid rgba(25, 186, 139, 0.17);
      background: rgba(255, 255, 255, 0.04)
        url("@/assets/common/index/line.png");
    }

    .m-item:nth-child(1) {
      height: 20vh;
    }
  }
}
</style>
