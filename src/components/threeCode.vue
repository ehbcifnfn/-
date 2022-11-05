<template>
  <div class="threeCode" ref="threeCode">
    <div class="imgCode">
      <img class="avaterimgCode" src="../img/avatar.jpg" alt="图像" />
      <h5>职业：学生</h5>
      <vue-typed-js
        :strings="['Code changes the world']"
        :typeSpeed="250"
        :backSpeed="20"
        :startDelay="1000"
        :cursorChar="'_'"
        :loop="true"
        :loopCount="1000"
      >
        <h5>
          <span class="typing"></span>
        </h5>
      </vue-typed-js>
    </div>
    <div class="iconCode">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-weixin" />
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-QQ" />
      </svg>
      <el-link type="info" href="https://github.com/ehbcifnfn" :underline="false">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-github" />
        </svg>
      </el-link>
    </div>
    <div class="information">
      <ul>
        <li>
          <div class="left">AGE</div>
          <div class="right">21</div>
        </li>
        <li>
          <div class="left">CITY</div>
          <div class="right">武汉</div>
        </li>
        <li>
          <div class="left">TIME</div>
          <div class="right">{{ time }}</div>
        </li>
        <li>
          <div class="left">Period</div>
          <div class="right">{{ newTime }}</div>
        </li>
      </ul>
    </div>
    <div class="ipAddress">
      <h5 v-html="ip"></h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      newTime: "",
      ip: "",
    };
  },
  created(){
    this.getIp();
    setInterval(() => {
      this.getPerformance_Period();
    }, 1000);
  },
  methods: {
    getPerformance_Period() {
      this.time = new Date().toLocaleString();
      let times1 = new Date();
      let beginTime = new Date("2022-10-08 19:00:00"); //2020-12-04 00:00:00
      let times = (times1 - beginTime) / 1000;
      let day = parseInt(times / 60 / 60 / 24);
      // console.log(day);
      let hour = parseInt(times / 60 / 60) % 24;
      hour = hour < 10 ? "0" + hour : hour;
      let min = parseInt(times / 60) % 60;
      min = min < 10 ? "0" + min : min;
      let s = parseInt(times % 60);
      s = s < 10 ? "0" + s : s;
      this.newTime =
        day.toString() +
        "天" +
        hour.toString() +
        "时" +
        min.toString() +
        "分" +
        s.toString() +
        "秒";
      // console.log(this.newTime);
    },
    async getIp() {
      const { data: res } = await this.$axios({
        url: "/Ip",
        method: "get"
      });
      // console.log(res);
      this.ip = "iP地址:" + res.ip;
    }
  }
};
</script>

<style lang="less" scoped>
.threeCode {
  position: fixed;
  left: 18%;
  top: 120px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  height: 700px;
  width: 310px;
}
.threeCode .imgCode {
  margin-top: 20px;
  font-size: 18px;
  width: 70%;
  height: 200px;
  background-color: #fff;
  border-bottom: 1px dashed #333;
}
.threeCode .iconCode {
  border-bottom: 1px dashed #333;
  width: 70%;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.threeCode .imgCode .avaterimgCode {
  background-color: #333;
  border-bottom: 0.01px dashed #333;
  border-radius: 10px;
  width: 60px;
  height: 60px;
}

.threeCode .iconCode .icon {
  height: 25px;
  width: 25px;
  margin-right: 10px;
}

.threeCode .information {
  list-style: none;
  height: 120px;
  width: 70%;
  border-bottom: 0.01px dashed #333;
}
.threeCode .information ul {
  list-style: none;
  padding: 10px;
  text-align: left;
}
.threeCode .information ul li {
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
.threeCode .information ul li .left {
  font-weight: 500;
  font-size: 15px;
}
.threeCode .information ul li .right {
  font-weight: 400;
  font-size: 14px;
  font-family: "隶书";
}
.threeCode .ipAddress {
  width: 70%;
  height: 40px;
}
</style>