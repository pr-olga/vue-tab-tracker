import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Songs from '@/views/Songs'
import CreateSong from '@/views/CreateSong'
import ViewSong from '@/views/ViewSong/ViewSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs-create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    }
  ]
})
