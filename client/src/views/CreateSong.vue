<template>
    <section class="add-new-song">
        <h1>Create New Song</h1>

        <b-form-input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        v-model="song.title"
        :rules="[required]"
        ></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="artist"
        id="artist"
        placeholder="artist"
        v-model="song.artist"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="genre"
        id="genre"
        placeholder="genre"
        v-model="song.genre"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="album"
        id="album"
        placeholder="album"
        v-model="song.album"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="albumImageURl"
        id="albumImageURl"
        placeholder="albumImageURl"
        v-model="song.albumImageURl"></b-form-input>
        <br>
        <b-form-input
        type="text"
        name="youtubeId"
        id="youtubeId"
        placeholder="youtubeId"
        v-model="song.youtubeId"></b-form-input>
        <br>
        <b-form-textarea
        type="text"
        name="lyrics"
        id="lyrics"
        placeholder="lyrics"
        v-model="song.lyrics"></b-form-textarea>
        <br>
        <b-form-textarea
        type="text"
        name="tab"
        id="tab"
        placeholder="tab"
        v-model="song.tab"></b-form-textarea>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
        error: null
      },
      required: (value) => !value || 'Required'
    }
  },
  methods: {
    async createsong () {
      try {
        await SongsService.post(this.song)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>

</style>
