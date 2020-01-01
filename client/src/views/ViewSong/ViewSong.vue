<template>
<section class="single-song">
    <h1>Song</h1>
    <meta-data :song='song'>
    </meta-data>
      <b-button variant="outline-primary"
        @click="navigateTo({
          name: 'song-edit',
          params: {
            songId: song.id
          }
        })"
        >Edit</b-button>
        <b-button v-if="isUserLoggedIn"
        variant="outline-primary"
        @click="bookmark"
        >Bookmark</b-button>
        <b-button v-if="isUserLoggedIn"
        variant="outline-danger"
        @click="unbookmark"
        >unBookmark</b-button>
    <image-song :imageSong='song.albumImageURl'>
    </image-song>
    <you-tube :song='song'>
    </you-tube>
    <lyrics :song='song'>
    </lyrics>
    <tabs :song='song'>
    </tabs>
</section>
</template>

<script>
import SongsService from '@/services/SongsService'
import MetaData from './_includes/MetaDataSong'
import ImageSong from './_includes/ImageSong'
import YouTube from './_includes/YouTubeSong'
import Lyrics from './_includes/LyricsSong'
import Tabs from './_includes/TabsSong'
import { mapState } from 'vuex'

export default {
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
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    bookmark () {
      console.log('bokmark')
    },
    unbookmark () {
      console.log('unbookmark')
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    MetaData,
    ImageSong,
    YouTube,
    Lyrics,
    Tabs
  }
}
</script>

<style>

</style>
