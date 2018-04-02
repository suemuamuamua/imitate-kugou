<template>
  <div class="singer">
    <div class="cell-group">
      <div class="cell-item" @click="goRouter(88)">热门歌手</div>
    </div>
    <div class="cell-group">
      <div class="cell-item" @click="goRouter(1)">华语男歌手</div>
      <div class="cell-item" @click="goRouter(2)">华语女歌手</div>
      <div class="cell-item" @click="goRouter(3)">华语组合</div>
    </div>
    <div class="cell-group">
      <div class="cell-item" @click="goRouter(4)">日韩男歌手</div>
      <div class="cell-item" @click="goRouter(5)">日韩女歌手</div>
      <div class="cell-item" @click="goRouter(6)">日韩组合</div>
    </div>
    <div class="cell-group">
      <div class="cell-item" @click="goRouter(7)">欧美男歌手</div>
      <div class="cell-item" @click="goRouter(8)">欧美女歌手</div>
      <div class="cell-item" @click="goRouter(9)">欧美组合</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Singer",
  methods: {
    goRouter(id) {
      this.$router.push({path: '/singerList/'+id})
    }
  }
}
</script>

<style scoped>
  .cell-group {
    width: 92%;
    height: auto;
    margin: 10px auto;
    border: 1px solid #eee;
    border-radius: 5px;
  }
  .cell-item {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #333;
    padding: 0 10px;
  }
  .cell-item:after {
    position: absolute;
    right: 10px;
    top: 10px;
    content: "";
    width: 30px;
    height: 30px;
    background: url('../assets/img/arrow_icon.png') no-repeat center center;
  }
</style>
