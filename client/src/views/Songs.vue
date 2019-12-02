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

export default {
  name: 'Songs',
  data () {
    return {
      songs: [
        {
          id: '1',
          title: 'Title one',
          artist: 'Artiste one',
          album: 'Album one'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
