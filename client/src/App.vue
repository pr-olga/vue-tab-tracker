<template>
  <div id="app">
    <page-header />
    <main class="container mt-10">
    <router-view/>
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
</style>
