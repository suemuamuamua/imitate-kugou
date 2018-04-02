import Vue from 'vue'
import Router from 'vue-router'
import NewSongList from '@/view/NewSongList'
import RankList from '@/view/RankList'
import MusicList from '@/view/MusicList'
import Singer from '@/view/Singer'
import SingerList from '@/view/SingerList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newSongs',
      component: NewSongList,
      alias: '/'
    },
    {
      path: '/rank',
      component: RankList
    },
    {
      path: '/musicList',
      component: MusicList
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/singerList',
      component: SingerList
    }
  ]
})
