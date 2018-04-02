<template>
  <div class="rank">
    <mt-cell v-for="item in rankList"
             :title="item.name"
             :to="'/rankFor/'+item.rankId"
             is-link>
      <img slot="icon" :src="item.img" width="50" height="50">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'RankList',
  data() {
    return {
      rankList: [
        {
          name: '酷狗500top',
          rankId: 1,
          img: require('../assets/img/default.png')
        },
        {
          name: '酷狗500top',
          rankId: 1,
          img: require('../assets/img/default.png')
        },
        {
          name: '酷狗500top',
          rankId: 1,
          img: require('../assets/img/default.png')
        },

        {
          name: '酷狗500top',
          rankId: 1,
          img: require('../assets/img/default.png')
        }
      ]
    }
    
  }
}
</script>

<style scoped>
  .mint-cell {
    min-height: 70px;
  }
</style>
