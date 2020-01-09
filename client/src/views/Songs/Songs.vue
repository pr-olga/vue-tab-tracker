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
     <songs-bookmarks />
    </b-col>
  </b-row>
  </section>
</template>

<script>
import SongsService from '@/services/SongsService'
import SearchSongs from './SearchSongs'
import SongsBookmarks from './SongsBookmarks'

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
    SearchSongs,
    SongsBookmarks
  }
}
</script>

<style scoped>
</style>
