<template>
    <section class="add-new-song">
        <h1>Create New Song</h1>

        <b-form-input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        v-model="title"
        ></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="artist"
        id="artist"
        placeholder="artist"
        v-model="artist"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="genre"
        id="genre"
        placeholder="genre"
        v-model="genre"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="album"
        id="album"
        placeholder="album"
        v-model="album"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="albumImageURl"
        id="albumImageURl"
        placeholder="albumImageURl"
        v-model="albumImageURl"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="youtubeId"
        id="youtubeId"
        placeholder="youtubeId"
        v-model="youtubeId"></b-form-input>
        <br>
        <b-form-textarea
        type="text"
        name="lyrics"
        id="lyrics"
        placeholder="lyrics"
        v-model="lyrics"></b-form-textarea>
        <br>
        <b-form-textarea
        type="text"
        name="tab"
        id="tab"
        placeholder="tab"
        v-model="tab"></b-form-textarea>
        <br>
        <b-button variant="success" @click="createsong">Register</b-button>
        <div class="error" v-html="error"></div>
    </section>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  name: 'CreateSong',
  data () {
    return {
      title: '',
      artist: '',
      genre: '',
      album: '',
      albumImageURl: '',
      youtubeId: '',
      lyrics: '',
      tab: '',
      error: null
    }
  },
  methods: {
    async createsong () {
      try {
        await SongsService.post({
          title: this.title,
          artist: this.artist,
          genre: this.genre,
          album: this.album,
          albumImageURl: this.albumImageURl,
          youtubeId: this.youtubeId,
          lyrics: this.lyrics,
          tab: this.tab
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
