<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <!-- 循环获取到的接口数据 -->
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">
        推荐歌单
      </h3>
      <div class="items">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="img-wrap">
            <!-- 歌单描述 -->
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <!-- 歌单图 -->
            <img :src="item.picUrl" alt="" />
            <!-- 播放图标 -->
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">
        最新音乐
      </h3>
      <div class="items">
        <div class="item" v-for="(item, index) in songs" :key="index">
          <div class="img-wrap">
            <!-- 封面 -->
            <img :src="item.picUrl" alt="" />
            <!-- 根据歌曲的id去获取歌曲的mp3文件 -->
            <span @click="playMusic(item.id)" class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <!-- 歌名 -->
            <div class="song-name">{{ item.name }}</div>
            <!-- 歌手名 -->
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="(item,index) in mvs" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <!-- 播放次数 -->
              <div class="num">{{ item.playCount }}</div>
            </div>
          </div>
          <div class="info-wrap">
            <!-- mv名 -->
            <div class="name">{{ item.name }}</div>
            <!-- 歌手名 -->
            <div class="singer">{{ item.artistName }}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  // 导入 axios
  import axios from 'axios'
  export default {
    name: 'discovery',
    data() {
      return {
        banners: [],// 轮播图
        list: [],// 推荐歌单
        songs: [],// 最新音乐
        mvs:[],// 推荐mv
      }
    },
    created() {
      // 轮播图接口
      axios({
        url: 'https://autumnfish.cn/banner',
        method: 'get'
      }).then(res => {
        //console.log(res)
        this.banners = res.data.banners
      })

      // 推荐歌单
      axios({
        url: 'https://autumnfish.cn/personalized',
        method: 'get',
        params: {
          // 获取的数据量
          limit: 10
        }
      }).then(res => {
        // console.log(res)
        this.list = res.data.result
      })

      // 最新音乐
      axios({
        url: 'https://autumnfish.cn/personalized/newsong',
        method: 'get'
      }).then(res => {
        //console.log(res)
        //获取的仅是歌曲的详细，暂无MP3文件
        this.songs = res.data.result
      })

      // 最新mv
      axios({
        url: 'https://autumnfish.cn/personalized/mv',
        method: 'get'
      }).then(res => {
        // console.log(res)
        this.mvs = res.data.result
      })
    },
    methods: {
      playMusic(id) {
        //根据歌曲的id去拿到其MP3文件并播放
        //console.log(id)
        let url = "https://music.163.com/song/media/outer/url?id=" + id + ".mp3"
        //console.log(url)
        //将url传递给这个值父组件mari.vue
        this.$parent.musicUrl = url
        }
    }
  }
</script>

<style></style>
