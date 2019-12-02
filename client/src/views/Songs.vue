<template>
    <section class="songs">
      <h1>Songs</h1>
        <div v-bind:key="song.id" v-for="song in songs">
          {{song.id}} -
          {{song.title}} -
          {{song.artist}} -
          {{song.album}}
        </div>
    </section>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  name: 'Songs',
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = await SongsService.index()
  }
}
</script>

<style scoped>
</style>
