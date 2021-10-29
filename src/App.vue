<template>
  <div>
    <!-- app
    <input type="button" value="点我试试" @click="sayHi"> -->
    <!-- 头部组件 -->
    <top></top>
    <!-- 主体组件 -->
    <mari></mari>
  </div>
</template>

<script>
// 导入
import top from './components/01.top.vue'
import mari from './components/02.mari.vue'
export default {
  // 注册组件
  components:{
    top,// top:top
    mari// index:index
  },
  methods:{
    sayHi(){
      alert('你好吗')
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

</style>