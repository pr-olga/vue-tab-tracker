<template>
<section class="single-song">
    <h1>Song</h1>
    <div>{{song.title}}</div>
    <div>{{song.artist}}</div>
    <div>{{song.genre}}</div>
    <div>{{song.album}}</div>
    <div>{{song.albumImageURl}}</div>
    <div>{{song.youtubeId}}</div>
    <div>{{song.lyrics}}</div>
    <div>{{song.tab}}</div>
</section>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style>

</style>
