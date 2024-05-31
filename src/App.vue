<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';


export default {

  name: 'App',
  components: {
    ProjectCard
  },



  data() {
    return {
      message: 'By',
      base_api_url: 'http://127.0.0.1:8000',
      base_project_url: '/api/projects',
      projects: [],
      loading: true,


    }
  },
  methods: {


    callApi(url) {

      axios.get(url)
        .then(response => {
          console.log(response);
          this.projects = response.data.projects;
          this.loading = false;
        })
        .catch(err => {
          console.errol(err);
        })
    }
  },
  mounted() {

    let url = this.base_api_url + this.base_project_url;
    this.callApi(url);

  }
}
</script>

<template>


  <header>Testa</header>

  <div class="container">
    <div class="row">
      <div class="">
        <ProjectCard :project="project" :key="project.id" v-for="project in projects.data"
          :base_api_url="base_api_url" />

      </div>
    </div>
  </div>


  <footer>piede</footer>

</template>

<style>
* {
  border: 1px dashed black;
}
</style>