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
        <b-button v-if="isUserLoggedIn && !bookmark"
        variant="outline-primary"
        @click="setAsBookmark"
        >Bookmark</b-button>
        <b-button v-if="isUserLoggedIn && bookmark"
        variant="outline-danger"
        @click="unsetAsBookmark"
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
import BookmarksService from '@/services/BookmarksService'

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
      },
      bookmark: null
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
    async setAsBookmark () {
      try {
        await BookmarksService.post({
          songId: this.$store.state.route.params.songId,
          userId: this.$store.state.user.id
        })
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data

    try {
      this.bookmark = (await BookmarksService.index({
        songId: songId,
        userId: this.$store.state.user.id
      })).data
    } catch (err) {
      console.log(err)
    }
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
