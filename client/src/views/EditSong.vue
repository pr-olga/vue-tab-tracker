<template>
  <section class="edit-song">
    <b-row align-h="center">
      <b-col cols="12" md="6">
        <h1>Edit Song</h1>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-3">
      <b-col cols="12" md="6">
        <b-form @submit="savesong">
          <b-form-input required type="text" name="title" id="title" placeholder="title" v-model="song.title"></b-form-input>
          <br>
          <b-form-input required type="text" name="artist" id="artist" placeholder="artist" v-model="song.artist"></b-form-input>
          <br>
          <b-form-input required type="text" name="genre" id="genre" placeholder="genre" v-model="song.genre"></b-form-input>
          <br>
          <b-form-input required type="text" name="album" id="album" placeholder="album" v-model="song.album"></b-form-input>
          <br>
          <b-form-input required type="text" name="albumImageURl" id="albumImageURl" placeholder="albumImageURl" v-model="song.albumImageURl"></b-form-input>
          <br>
          <b-form-input required type="text" name="youtubeId" id="youtubeId" placeholder="youtubeId" v-model="song.youtubeId"></b-form-input>
          <br>
          <b-form-textarea required type="text" name="lyrics" id="lyrics" placeholder="lyrics" v-model="song.lyrics"></b-form-textarea>
          <br>
          <b-form-textarea required type="text" name="tab" id="tab" placeholder="tab" v-model="song.tab"></b-form-textarea>
          <br>
          <b-button type="submit" variant="success">Save Song</b-button>
        </b-form>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  name: 'EditSong',
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null
    }
  },
  methods: {
    async savesong (e) {
      try {
        e.preventDefault()
        const songId = this.$store.state.route.params.songId
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style>

</style>
