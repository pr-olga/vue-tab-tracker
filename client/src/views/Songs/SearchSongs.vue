<template>
  <section id="search-songs">
    <b-row align-h="center">
      <b-col cols="12" md="7">
        <b-jumbotron>
          <b-form-input placeholder="Search by song title, artist, album, or genre" v-model="search"></b-form-input>
          <b-button class="mt-3 float-right" variant="primary" href="#">Search</b-button>
        </b-jumbotron>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SearchSongs',
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce (async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }

}
</script>

<style>

</style>
