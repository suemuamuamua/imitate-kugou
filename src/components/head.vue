<template>
    <div class="head">
      <div class="logo">
        <a href="#">
          <img src="http://m.kugou.com/v3/static/images/index/logo.png">
        </a>
      </div>
      <div class="search" @click="search()">
        <img src="http://m.kugou.com/v3/static/images/index/search.png">
      </div>
    </div>
</template>

<script>
export default {
  name: 'head',
  methods: {
    search () {
      console.log('search')
    }
  }
}
</script>

<style scoped>
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 51px;
  padding: 10px;
  background: #2CA2F9;
  color: #fff;
}
.logo {
  height: 100%;
  float: left;
}
  .logo a {
    display: block;
    height: 100%;
    line-height: 51px;
  }
  .logo img {
    height: 100%;
  }
  .search {
    float: right;
    height: 31px;
    padding: 3px 0;
  }
  .search img {
    height: 100%;
  }
</style>
