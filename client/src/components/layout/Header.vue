<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand href="#">
        <router-link tag="span" to="/">
               Tab-Tracker
        </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>
          <router-link tag="span" to="songs">
               Browser
           </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link tag="span" to="songs-create">
               Add
          </router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      <b-nav-item v-if="!$store.state.isUserLoggedIn">
           <router-link tag="span" to="login">
               Login
           </router-link>
       </b-nav-item>
       <b-nav-item v-if="!$store.state.isUserLoggedIn">
           <router-link tag="span" to="register">
               Sign up
           </router-link>
       </b-nav-item>
       <b-nav-item v-if="$store.state.isUserLoggedIn">
         <b-nav-item @click="logout">
           Log out
         </b-nav-item>
       </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>
