import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import login from "../components/login.vue";
import study from "../components/study.vue";
import show from "../components/show.vue";
import write from '../components/write.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/HelloWorld/show",
  },
  {
    path: "/login", component: login
  },

  {
    path: "/HelloWorld",
    component: HelloWorld,
    children: [
      { path: "show", component: show },
      {
        path: "study",
        component: study,
      },
      { path: "write", component: write },

    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

const arr = [
  '/HelloWorld', '/HelloWorld/show', '/HelloWorld/study'
]

router.beforeEach((to, from, next) => {
  if (arr.indexOf(to.path) !== -1) {
    const tokenStr = sessionStorage.getItem("token");
    if (tokenStr) {
      //判断不重名
      if (to.meta.requireAuth == true) {
        next();
      }
    } else {
      setTimeout(() => {
        Vue.prototype.$message({
          message: '您未登录,请先登录',
          type: "warning",
        });
        next("/login");

      }, 6000)
    }
  }
  next();
});

export default router;
