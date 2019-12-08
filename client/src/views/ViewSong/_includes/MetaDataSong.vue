<template>
  <section class="meta-data">
    <div>{{song.title}}</div>
    <div>{{song.artist}}</div>
    <div>{{song.genre}}</div>
    <div>{{song.album}}</div>
  </section>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style>

</style>
