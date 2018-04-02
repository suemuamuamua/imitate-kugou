<template>
  <div id="app">
    <Header></Header>
    <div :class="['main',{'paddingB70':togglePlayer}]">
      <router-view></router-view>
    </div>
    <Player></Player>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: { Header, Player },
  computed: {
    togglePlayer: {
      get() {

        console.log(this.$store.getters.togglePlayer)
        return this.$store.getters.togglePlayer
      }
    }
  }
}
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
  padding-top: 102px;
  overflow: scroll;
}
.main.paddingB70 {
  padding-bottom: 70px;
}

</style>
