<template>
  <div class="header">
    <Head></Head>
    <header-nav></header-nav>
  </div>
</template>

<script>
import Head from './head.vue'
import headerNav from './headerNav.vue'

export default {
  name: 'Header',
  components: { Head, headerNav }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 95px;
}
</style>
