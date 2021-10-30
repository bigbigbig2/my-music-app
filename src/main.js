import Vue from 'vue'
import App from './App.vue'
//导入全局初始化样式
import './assets/index.css'
// 导入
import VueRouter from 'vue-router'
// 导入 需要通过路由管理的组件
import discovery from './views/01.discovery.vue'
import playlists from './views/02.playlists.vue'
import songs from './views/03.songs.vue'
import mvs from './views/04.mvs.vue'
import result from './views/05.result.vue'
import playlist from './views/06.playlist.vue'
import mv from './views/07.mv.vue'
// 导入 element-ui
import ElementUI from 'element-ui'
// 导入 element-ui 的样式
import 'element-ui/lib/theme-chalk/index.css';
// use一下
Vue.use(ElementUI)

Vue.config.productionTip = false


// use
Vue.use(VueRouter)

// 创建路由
let router = new VueRouter({   
  routes:[
    {
      path:"/",
      component:discovery
    },
    {
      //发现音乐
      path: '/discovery',
      component: discovery
    },
    {
      path:"/playlists",
      component:playlists
    },
    {
      path:"/songs",
      component:songs
    },
    {
      path:"/mvs",
      component:mvs
    },
    {//mv详情页
      path:'mv',
      conponent: mv
    },
    {//搜索结果页
      path:"/result",
      component:result
    }
  ]
})



new Vue({
  render: h => h(App),
  // 挂载到Vue实例上
  router// router:router
}).$mount('#app')