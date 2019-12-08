<template>
<section class="single-song">
    <h1>Song</h1>
    <meta-data :song='song'>
    </meta-data>
    <image :song='song'>
    </image>
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
import Image from './_includes/ImageSong'
import YouTube from './_includes/YouTubeSong'
import Lyrics from './_includes/LyricsSong'
import Tabs from './_includes/TabsSong'

export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    MetaData,
    Image,
    YouTube,
    Lyrics,
    Tabs
  }
}
</script>

<style>

</style>
