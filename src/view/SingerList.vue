<template>
  <div>
    <mt-cell v-for="item in singerList"
             :title="item.name"
             is-link
             :to="'/singerInfo/'+item.id">
      <img slot="icon" :src="item.img" width="50" height="50"/>
    </mt-cell>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'SingerList',
  data() {
    return {
      singerList: [
      {
        name: '王力宏',
        rankId: 1,
        img: require('../assets/img/default.png')
      },
      {
        name: '周杰伦',
        rankId: 2,
        img: require('../assets/img/default.png')
      },
      {
        name: '林俊杰',
        rankId: 3,
        img: require('../assets/img/default.png')
      },

      {
        name: '方大同',
        rankId: 4,
        img: require('../assets/img/default.png')
      }
      ]
    }
  }
}
</script>