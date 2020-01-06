<template>
  <section class="songs">
  <b-row>
    <b-col cols="8" xs="12">
      <div>
          <h1>Songs</h1>
      </div>
        <search-songs />
          <div v-bind:key="song.id" v-for="song in songs">
            {{song.id}} -
            {{song.title}} -
            {{song.artist}} -
            {{song.album}}
          <div>
            <b-button variant="primary"
            @click="navigateTo({
              name: 'song',
              params: {
                songId: song.id
              }
            })"
            >View</b-button>
          </div>
        </div>
    </b-col>
    <b-col cols="4" xs="12">
      <h2>
        Bookmarks
      </h2>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </b-col>
  </b-row>
  </section>
</template>

<script>
import SongsService from '@/services/SongsService'
import SearchSongs from './SearchSongs'

export default {
  name: 'Songs',
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    SearchSongs
  }
}
</script>

<style scoped>
</style>
