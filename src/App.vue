<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  },

  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<template>

  <AppHeader />

  <main>
    <div class="container">

      <RouterView />

    </div>
  </main>

  <footer class="text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">piede</footer>

</template>

<style>
/* * {
  border: 1px dashed black;
} */
</style>