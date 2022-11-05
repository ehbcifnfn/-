import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";
import router from "../src/router";
import store from "./store";
import axios from "axios";
import VueTypedJs from "vue-typed-js";
// 引入icon图标
import "../src/font/font_a7b9r2ysdfo/iconfont.js";
Vue.use(VueTypedJs);

Vue.prototype.$axios = axios;

// axios.defaults.baseURL = "http://127.0.0.1:80";
axios.interceptors.request.use(

  function (config) {
    const arr = ["/login", '/Ip'];
    // console.log(config.url);
    config.baseURL = "http://127.0.0.1:80"
    // console.log(arr.includes(config.url))
    if (arr.includes(config.url)) {
      return config;
    } else {
      config.headers.Authorization = window.sessionStorage.getItem("token");
      return config;
    }
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
Vue.prototype.switch = false;


axios.interceptors.response.use((config) => {

  const { status, msg, ipnum } = config.data;

  if (status == 5000) {
    Vue.prototype.$message({
      message: msg,
      type: "warning",
    });
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  if (ipnum) {

    setTimeout(() => {
      app.switch = true;
    }, 2000)

  }

  return Promise.resolve(config);

});

Vue.use(ElementUI);

const app = new Vue({
  data: {
    switch: false
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
