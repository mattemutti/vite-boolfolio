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
  <div class="intro_site">
    <h2 class="t1_intro">Matteo Mutti </h2>
    <h1 class="px-2 t2_intro">| Portfolio</h1>
  </div>
  <div class="bg_external a_home">
    <AppHeader />
    <main class="squared-border bg_home">
      <div class="title_home">
        <h1> Matteo Mutti </h1>
        <p>
          <span>Junior Full Stack Web Developer</span>
        </p>
      </div>
      <!-- <img class="bg_home" src="../public/img/bg-home.jpg" alt=""> -->
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