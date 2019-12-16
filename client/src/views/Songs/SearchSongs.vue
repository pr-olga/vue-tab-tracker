<template>
  <section id="search-songs">
    <b-row align-h="center">
      <b-col cols="12" md="7">
        <b-jumbotron>
          <b-form-input placeholder="Search for a song"></b-form-input>
          <b-button class="mt-3 float-right" variant="primary" href="#">Search</b-button>
        </b-jumbotron>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: 'SearchSongs'
}
</script>

<style>

</style>