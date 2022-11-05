<template>
  <div class="begin">
    <!--播放视频 -->
    <div>
      <div class="firstCode">
        <video
          src="../img/fengjing.mp4"
          id="video"
          autoplay="autoplay"
          :controls="false"
          loop
          muted
        >
          <source src="../img/fengjing.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- 第二个盒子 -->
      <div class="secondCode">
        <div class="chang">
          <div class="userless"></div>
          <div class="user">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- 固定定位盒子 -->
    <three-code></three-code>
    <!-- <div class="threeCode" ref="threeCode">
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
        <svg class="icon" aria-hidden="true" @click=" getCode">
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
    </div>-->
    <!-- 返回顶部 -->
    <div class="toTop" v-if="show" @click="goBack()">
      <i class="el-icon-top"></i>
    </div>
    <!-- <div class="fri" v-if="this.switch" ref="fri">

      <div class="yanzhneg">
        <h3>请输入验证码 {{time2}}</h3>
        <span>{{num}}</span>
        <div class="uu">
          <div v-for="(item,index) in  random" :key="index">
            <input type="text" v-model="item.val" @input="input(index)" ref="input" />
          </div>
        </div>
      </div>
    </div>-->
    <random v-if="this.$root.switch"></random>
  </div>
</template>

<script>
import show from "../components/show.vue";
import { jieliu } from "../views/total.js";
import threeCode from "../components/threeCode.vue";
import random from "../components/random.vue";
export default {
  components: { show, threeCode, random },
  name: "Main",
  data() {
    return {
      show: false,
      num: "",
      str: "",
      data1: "",
      time2: 60,
      random: [
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" },
        { val: "" }
      ]
    };
  },

  mounted() {
    window.addEventListener("scroll", this.toTop);

    window.addEventListener("scroll", this.getTops);
  },


  methods: {
    // 验证码
    async input(index) {
      console.log(index < this.random.length - 1);
      if (index < this.random.length - 1) {
        console.log(this.$refs.input[index].value);
        if (this.$refs.input[index].value) {
          // index = index + 1;
          // console.log(this.$refs.input[index].value);
          this.str += this.$refs.input[index].value;
          // console.log(this.str)
          index = index + 1;
          this.$nextTick(() => {
            this.$refs.input[index].focus();
          });
        }
      } else {
        this.str += this.$refs.input[index].value;
        this.yan();
      }
      //   console.log(this.$refs.input);
    },
    async yan() {
      const { data: res } = await this.$axios({
        url: "/proving",
        method: "post",
        data: {
          num: this.str,
          idnum: this.data1.idnum,
          index: this.data1.insertId
        }
      });
      console.log(res.msg);
      if (res.msg == "验证通过" && res.status == 200) {
        this.$message({
          type: "success",
          message: res.msg
        });
        this.switch = false;
      }
      if (res.status == 400) {
        this.$message({
          type: "success",
          message: res.msg
        });
      }
    },
    async getrandom() {
      const { data: res } = await this.$axios({
        url: "/random",
        method: "get"
      });
      console.log(res);
      this.data1 = res.data;
      this.num = res.data.rondomNumber;

      const tt = setInterval(() => {
        this.time2--;
        if (this.time == 0) {
          window.clearInterval(tt);
        }
      }, 1000);
    },

    getCode: jieliu(function() {
      console.log("我是截流" + new Date().toLocaleString());
    }, 10000),
    getTops() {
      //获取顶部滑动的距离
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 660) {
        this.$refs.threeCode.style.top = 0 + "px";
      } else {
        this.$refs.threeCode.style.top = 120 + "px";
      }
    },

    // getPerformance_Period() {
    //   this.time = new Date().toLocaleString();
    //   let times1 = new Date();
    //   let beginTime = new Date("2022-10-08 19:00:00"); //2020-12-04 00:00:00
    //   let times = (times1 - beginTime) / 1000;
    //   let day = parseInt(times / 60 / 60 / 24);
    //   // console.log(day);
    //   let hour = parseInt(times / 60 / 60) % 24;
    //   hour = hour < 10 ? "0" + hour : hour;
    //   let min = parseInt(times / 60) % 60;
    //   min = min < 10 ? "0" + min : min;
    //   let s = parseInt(times % 60);
    //   s = s < 10 ? "0" + s : s;
    //   this.newTime =
    //     day.toString() +
    //     "天" +
    //     hour.toString() +
    //     "时" +
    //     min.toString() +
    //     "分" +
    //     s.toString() +
    //     "秒";
    //   // console.log(this.newTime);
    // },
    // async getIp() {
    //   const { data: res } = await this.$axios({
    //     url: "/Ip",
    //     method: "get"
    //   });
    //   // console.log(res);
    //   this.ip = "iP地址:" + res.ip;
    // },
    goBack() {
      document.documentElement.scrollTop = 0;
      this.show = false;
    },
    toTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  console.log(scrollTop)
      if (scrollTop > window.outerHeight) {
        this.show = true;
      }
      if (scrollTop < 660) {
        this.show = false;
      }
      // console.log("距离顶部的距离:" + scrollTop);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.toTop);
    window.addEventListener("scroll", this.getTops);
  }
};
</script>

<style lang="less" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.firstCode {
  background-color: #333;
  text-align: center;
  height: 470px;
  width: 100%;
}
video {
  object-fit: contain;
  width: 100%;
  height: 470px;
}
.secondCode {
  display: flex;
  justify-content: center;
  background-color: #eaeaea;
  text-align: center;
  min-height: 1600px;
  width: 100%;
}
.secondCode .chang {
  width: 1000px;
  display: flex;
  justify-content: flex-start;
}
.secondCode .chang .userless {
  flex: 1.1;
  height: 100%;
  background-color: #eaeaea;
}
.secondCode .chang .user {
  flex: 2;
  height: 100%;
  width: 80%;
  background-color: #eaeaea;
}

.toTop {
  width: 50px;
  height: 50px;
  line-height: 50px;
  background-color: rgb(172, 171, 171);
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 40px;
  color: #333;
  border-radius: 50%;
  text-align: center;
}

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
.yanzhneg {
  position: absolute;
  top: 22%;
  left: 38%;
  width: 400px;
  height: 300px;
  background-color: #eaeaea;
  border-radius: 10px;
  z-index: 99999;
}
</style>