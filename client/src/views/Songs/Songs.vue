<template>
    <section class="songs">
      <b-row align-h="center">
        <b-col cols="12" md="7">
          <h1>Songs</h1>
        </b-col>
      </b-row>
        <search-songs />
        <div v-bind:key="song.id" v-for="song in songs">
          {{song.id}} -
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
          <div>
            <b-button variant="outline-primary"
            @click="navigateTo({
              name: 'song',
              params: {
                songId: song.id
              }
            })"
            >View</b-button>
          </div>

        </div>
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
