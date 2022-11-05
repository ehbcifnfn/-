<template>
  <div class="study1">
    <div class="study">
      <Ul>
        <li>分享类</li>
        <li>创作类</li>
        <li>纪录类</li>
        <li>记录</li>
      </Ul>
    </div>

    <div class="stu">
      <h3>----------------------- 纪录类 -------------------------</h3>
    </div>
    <div class="row2">
      <div class="wai">
        <span class="icon"></span>
        <div class="title">nihao</div>
        <div class="time">{{time}}</div>
        <div class="p">
          在纯静态网站里，有时候会动态更新某个区域往会选择
          P理，有些人可能会全量选择加载，这样会导致加载很多无用的脚本，有可能在用户关闭页面时都不一定会访问到，会很浪费资源。在纯静态网站里，有时候会动态更新某个区域往会选择
          Pjax（swup、barba.js）去处理，他们都是使用 ajax 和 pushState
          通过真正的永久链接，页面标题和后退按钮提供快速浏览体验。
          但是实际使用中可能会遇到不同页面可能会需要加载不同插件处理，有些人可能会全量选择加载，这样会导致加载很多无用的脚本，有可能在用户关闭页面时都不一定会访问到，会很浪费资源。在纯静态网站里，有时候会动态更新某个区域往会选择
          Pjax（swup、barba.js）去处理，他们都是使用 ajax 和 pushState
          通过真正的永久链接，页面标题和后退按钮提供快速浏览体验。
          但是实际使用中可能会遇到不同页面可能会需要加载不同插件处理，有些人可能会全量选择加载，这样会导致加载很多无用的脚本，有可能在用户关闭页面时都不一定会访问到，会很浪费资源。
        </div>
      </div>
       <div class="wai">
        <span class="icon"></span>
        <div class="title">nihao</div>
        <div class="time">{{time}}</div>
        <div class="p">
         用 ajax 和 pushState
          通过真正的永久链接，页面标题和后退按钮提供快速浏览体验。
          但是实际使用中可能会遇到不同页面可能会需要加载不同插件处理，有些人可能会全量选择加载，这样会导致加载很多无用的脚本，有可能在用户关闭页面时都不一定会访问到，会很浪费资源。在纯静态网站里，有时候会动态更新某个区域往会选择
          Pjax（swup、barba.js）去处理，他们都是使用 ajax 和 pushState
          通过真正的永久链接，页面标题和后退按钮提供快速浏览体验。
          但是实际使用中可能会遇到不同页面可能会需要加载不同插件处理，有些人可能会全量选择加载，这样会导致加载很多无用的脚本，有可能在用户关闭页面时都不一定会访问到，会很浪费资源。
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeColor: "",
      a: "",
      time:''
    };
  },
created(){
this.time=new Date().toLocaleString();
},
  methods: {
    gwtHeight() {
      const row2 = document.getElementsByClassName("row2");
      console.log(this.$refs.row2.offsetHeight);
      this.a = this.$refs.row2.offsetHeight + 10;
      console.log(this.a);
    },
  },
};
</script>

<style lang="less" scoped>
.study1 {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  height: 100%;
}
.study1 .study {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -40px;
  border-radius: 10px;
  width: 100%;
  height: 156px;
  background-color: #fff;
}
.study1 .study ul {
  display: flex;
  justify-content: space-between;
  color: #333;
  flex-wrap: wrap;
  width: 80%;
  height: 72px;
  font-weight: 400;
  text-align: left;
  background-color: #fff;
}
.study1 .study ul li {
  width: 30%;
  height: 50%;
  line-height: 36px;
}
.study1 .stu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 104px;
  font-weight: 300;
}
.study1 .row2 {
  width: 100%;
  min-height: 1000px;
}
.study1 .row2 .wai {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  position: relative;
  background-color: #fff;
  width: 100%;
  border-radius: 20px;
  text-align: left;
}
.study1 .row2 .wai:hover{
  box-shadow: 5px 7px 6px 6px rgb(173, 172, 172);

}
.study1 .row2 .wai::before {
  position: absolute;
  top: 0;
  left: -20px;
  background-color: #fcfcfe;
  width: 4px;
  height: 100%+20px;
  z-index: 1;
  content: "";
}
.study1 .row2 .wai .icon {
  position: absolute;
  top: -5px;
  left: -28px;
  contain: "";
  z-index: 999;
  width: 20px;
  height: 20px;
  background-color: #afb42b;
  border-radius: 50%;
}

.study1 .row2 .wai .title {
  background-color: #fff;
  text-align: center;
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 600;
}
.study1 .row2 .wai .time{
  font-size: 12px;
 text-align: center;
  width: 100%;
  height: 20px;

}
.study1 .row2 .wai .p {
 font-weight: 400;
  font-size: 16px;
  color: #333;
width: 100%;
  border-radius: 10px;
}
</style>