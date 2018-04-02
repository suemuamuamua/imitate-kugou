<template>
  <div class="player">
    <div :class="['toggle',{'toopen':!togglePlayer}]" @click="changeToggle(!togglePlayer)">
      <!-- <img class="toggle-img" src="../assets/img/close_icon.png"> -->
    </div>
    <div class="player-main" v-show="togglePlayer">
      <img class="playing-img" :src="currentSong.imgUrl"/>
      <div class="song-info">
        <span class="song-name">{{this.currentSong.title}}</span>
        <span class="song-singer">{{this.currentSong.singer}}</span>
      </div>
      <div class="play-controller">
        <img class="play-state" src="../assets/img/pause_icon.png"/>
        <img class="play-next" src="../assets/img/next_icon.png"/>
      </div>
    </div>
  </div>
  
</template>

<script type="text/javascript">
  export default {
    name: 'Player',
    computed: {
      togglePlayer: {
        get() {
          return this.$store.getters.togglePlayer
        }
      },
      currentSong: {
        get() {
          return this.$store.getters.getCurSong
        }
      }
    },
    methods: {
      changeToggle(value) {
        this.$store.commit('setPlayer',value)
      }
    }
  }
</script>

<style type="text/css">
.player {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 30px;
}
.player-main {
  width: 100%;
  height: 70px;
  padding: 10px;
  background: rgba(50,50,50,0.8);
}
.player .toggle {
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: rgba(50,50,50,0.8);
  background-image: url('../assets/img/close_icon.png');
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
}
.toggle.toopen {
  background-image: url('../assets/img/open_icon.png');
}
.playing-img  {
  width: 50px;
  height: 50px;
  float: left;
}
.song-info {
  float: left;
  font-size: 14px;
  color: #fff;
  line-height: 21px;
  padding-left: 10px;
  max-width: 40%;
}
.song-info span {
  display: block;
}
.play-controller {
  width: 100px;
  height: 50px;
  margin-right: 30px;
  float: right;
}
.play-controller .play-state {
  float: left;
  width: 50px;
  height: 50px;
}

</style>