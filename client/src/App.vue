<template>
  <div id="app">
    <page-header />
    <main class="container mt-5">
    <router-view/>
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
.bg-success {
  background-color: #002627!important;
}

.btn-primary,
.btn-success,
.btn-primary:not(:disabled):not(.disabled):active {
  background-color: #00bcbc;
  border-color: #00bcbc;

  &:hover{
    background-color: #00bcbc;
    border-color: #00bcbc;
    opacity: 0.7;
  }
}
</style>
