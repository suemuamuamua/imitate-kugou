<template>
    <div class="header-nav">
      <mt-navbar v-model="selectedNav">
        <mt-tab-item id="1">新歌</mt-tab-item>
        <mt-tab-item id="2">排行</mt-tab-item>
        <mt-tab-item id="3">歌单</mt-tab-item>
        <mt-tab-item id="4">歌手</mt-tab-item>
      </mt-navbar>
    </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui'

Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
export default {
  name: 'headerNav',
  // data () {
  //   return {
  //     selectedNav: '1'
  //   }
  // },
  computed: {
    selectedNav: {
      get() {
        return this.$store.getters.selectedNav
      },
      set(nav){
        this.$store.commit('setNav', nav)
        this.goRouter(Number(nav))
      }
    }
  },
  methods: {
    goRouter(index) {
      switch(index) {
        case 1: {this.$router.push({path:'/newSongs'});break;}
        case 2: {this.$router.push({path:'/rank'});break;}
        case 3: {this.$router.push({path:'/musicList'});break;}
        case 4: {this.$router.push({path:'/singer'});break;}
      }
    }
  }

}
</script>

<style scoped>
.header-nav {
  padding-top: 51px;
}

</style>
