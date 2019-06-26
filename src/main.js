/*
* 入口js
* */
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer.js' //加载mockServer即可
import loading from './common/imgs/loading.gif'
import './filters'  //加载过滤器

//注册成为全局组件标签
Vue.component(Button.name,Button)  //mt-button
Vue.use(VueLazyLoad,{//内部自定义了一个指令lazy
  loading
})

new Vue({
  el:'#app',
  render:h => h(App),
  router,//用上vue-router
  store, //用上vuex
})
