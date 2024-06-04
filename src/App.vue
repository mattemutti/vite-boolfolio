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
  <div class="bg_external">
    <AppHeader />
    <main class="squared-border">

      <h1> Matteo Mutti </h1>
      <div class="container">

        <RouterView />

      </div>


    </main>
  </div>
</template>

<style>
/* * {
  border: 1px dashed black;
} */
</style>