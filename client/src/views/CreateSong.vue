<template>
  <section class="add-new-song">
    <h1>Create New Song</h1>
    <b-form @submit="createsong">
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
      <b-button type="submit" variant="success">Register</b-button>
    </b-form>
  </section>
</template>

<script>
  import SongsService from '@/services/SongsService'
  export default {
    name: 'CreateSong',
    data() {
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
      async createsong(evt) {
        try {
          evt.preventDefault();
          await SongsService.post(this.song)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>

<style>

</style>