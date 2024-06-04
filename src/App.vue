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
      <div class="box_top"></div>

      <RouterView />

    </main>
    <div class="p-2 text-end" style="font-size: 12px;">
      Copyrigth @ Matteo Mutti 2024
    </div>
  </div>
</template>

<style>
/* * {
  border: 1px dashed black;
} */
</style>