<script>



export default {

  name: 'App',
  components: {

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
  <header>
    <div class="d-flex justify-content-between">

      <div>Logo</div>
      <div class="right-menu">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
        <router-link :to="{ name: 'blogs' }">Blogs</router-link>
        <router-link :to="{ name: 'contacts' }">Contacts</router-link>
      </div>
    </div>
  </header>
  <main>
    <div class="container">


      <RouterView />


    </div>
  </main>


  <footer>piede</footer>

</template>

<style>
* {
  border: 1px dashed black;
}
</style>