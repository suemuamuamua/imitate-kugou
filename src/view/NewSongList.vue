<template>
  <div class="newsong" >
    <mt-swipe>
      <mt-swipe-item>
        <a href="#">
          <img src="../assets/banner1.jpg" alt="下载">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="../assets/banner2.jpg" alt="下载">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="../assets/banner3.jpg" alt="下载">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="../assets/banner4.jpg" alt="下载">
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <mt-cell v-for="song in newSongList" :title="song.title">
      <img src="../assets/img/download_icon.png" alt="下载" class="download-icon">
    </mt-cell>
  </div>
</template>

<script>
import Vue from 'vue'
// import { Swipe, SwipeItem } from 'mint-ui'

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
import songList from '../data/list_index.js'

export default {
  name: 'NewSongList',
  data () {
    return {
      newSongList: []
    }
  },
  created () {
    this.newSongList = songList
  }
}
</script>
<style>
.download-icon {
  width: 24px;
  height: 24px;
  float: right;
}
.mint-swipe-items-wrap {
  height: 25vh!important;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mint-cell-title{
  min-width: 0;/*解决单行省略在flex中的显示问题*/
}
.mint-cell-text {
  display: inline-block;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
