<template>
  <div class="show">
    <div class="show2">
      <!-- 头部区域 -->
      <div class="top">
        <div class="show_top">
          <div class="show_study">
            <h6>
              学习类
              <div class="icon">20</div>
            </h6>
          </div>
          <div class="show_study2">
            <router-link to="/HelloWorld/study">详情</router-link>
          </div>
        </div>
        <div class="show_top2">
          <div class="show_study">
            <h6>
              生活类
              <div class="icon">29</div>
            </h6>
          </div>
          <div class="show_study2">
            <router-link to="/">详情</router-link>
          </div>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="cut_1">
        <h3>最近发布</h3>
        <span></span>
      </div>
      <!-- 内容 -->
      <div class="main">
        <ul v-for="(item, index) in arr" :key="index">
          <li>
            <img :src="item.src" alt />
          </li>
          <li>{{ item.id }}</li>
          <li>{{ 3 }}</li>
          <li>{{ item.time }}</li>
        </ul>
      </div>
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Foot from "../components/foot.vue";
export default {
  components: {
    Foot
  },
  data() {
    return {
      arr: [
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        },
        {
          id: 0,
          img: "1",
          src: "https://www.imalun.com/images/avatar.jpg",
          time: ""
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
body {
  overflow: hidden;
}

a {
  text-decoration: none;
}
h3 {
  width: 20%;
  display: inline-block;
}
h6 {
  display: inline-block;
  display: flex;
  justify-content: center;
  line-height: 1.2;
  font-size: 1rem;
  letter-spacing: 0;
  font-weight: 800;
  color: #00283a;
  margin-bottom: 0;
  margin-top: 30px;
  width: 100%;
}
.show {
  width: 100%;
  min-height: 1000px;
}

.show .show2 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  min-height: 1200px;
}
.show .show2 .top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  margin-top: -40px;
}
.show .show2 .cut_1 {
  width: 100%;
  margin-top: 10px;

  height: 78px;
  text-align: left;
}
.show .show2 .cut_1 span {
  display: inline-block;
  height: 2px;
  background-color: rgba(225, 225, 235, 0.9);
  width: 70%;
}
.show .show2 .top .show_top {
  display: flex;
  line-height: 80px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: #ffffff;
  width: 46%;
  border-radius: 10px;
}

.show .show2 .top .show_top2 {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  line-height: 80px;
  background-color: #ffffff;
  width: 46%;
  border-radius: 10px;
}
.show .show2 .top .show_top .show_study {
  height: 50%;
  width: 70%;
  border-bottom: 1px dashed #000;
}
.show .show2 .top .show_top .show_study2 {
  height: 50%;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  font-family: "隶书";
}

.show .show2 .top .show_top2 .show_study {
  height: 50%;
  width: 70%;
  border-bottom: 1px dashed #000;
}
.show .show2 .top .show_top2 .show_study2 {
  height: 50%;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  font-family: "隶书";
}
.show .show2 .top .show_top:hover {
  box-shadow: 0 20px 17px rgb(179, 178, 178);
}
.show .show2 .top .show_top2:hover {
  box-shadow: 0 20px 17px rgb(179, 178, 178);
}
.show .show2 .top .show_top .icon {
  width: 40px;
  height: 18px;
  background-color: #6062ce;
  border-radius: 15px;
  font-family: "隶书";
  color: #fff;
  text-align: center;
  line-height: 18px;
}
.show .show2 .top .show_top2 .icon {
  width: 40px;
  height: 18px;
  background-color: #6062ce;
  border-radius: 15px;
  font-family: "隶书";
  color: #fff;
  text-align: center;
}
.show .show2 .main {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: 1600px;
}

.show .show2 .main ul {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 46%;
  height: 408px;
  margin-bottom: 40px;
  border-radius: 20px;
  background-color: #fff;
}
.show .show2 .main ul li {
  padding: 15px 40px;
  font-size: 10px;
}
.show .show2 .main ul li img {
  height: 214.2px;
  width: 100%;
  background-color: rgb(221, 93, 93);
  border-radius: 20px 20px 0 0;
}
</style>