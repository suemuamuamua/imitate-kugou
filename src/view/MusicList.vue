<template>
  <div class="music-list">
    <mt-cell v-for="item in musicList"
             :title="item.title"
             is-link
             :to="'/musicListInfo/'+item.location">
      <img slot="icon" :src="item.imgUrl" width="50" height="50"/>
    </mt-cell>
  </div>
</template>

<script>
import music from '../data/list_plist.js'
export default {
  name: "MusicList",
  data() {
    return {
      musicList: music
    }
  }
}
</script>

<style scoped>
  .mint-cell {
    min-height: 70px;
  }
</style>
