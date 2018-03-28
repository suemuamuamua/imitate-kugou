<template>
    <div class="header-nav">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">新歌</mt-tab-item>
        <mt-tab-item id="2">排行</mt-tab-item>
        <mt-tab-item id="3">歌单</mt-tab-item>
        <mt-tab-item id="4">歌手</mt-tab-item>
      </mt-navbar>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Navbar, TabItem } from 'mint-ui';

  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  export default {
    name: "headerNav",
    data() {
      return {
        selected: "1"
      }
    }
  }
</script>

<style scoped>
.header-nav {
  padding-top: 51px;
}

</style>
