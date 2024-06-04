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
      <div class="title_home">
        <h1> Matteo Mutti </h1>
        <p>
          <span>Junior Full Stack Web Developer</span>
        </p>
      </div>
      
      <RouterView />

    </main>
  </div>
</template>

<style>
/* * {
  border: 1px dashed black;
} */
</style>