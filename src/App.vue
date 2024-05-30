<script>
import axios from 'axios';

export default {

  name: 'App',


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

  <h1>{{ message }}</h1>
</template>

<style>
* {
  border: 1px dashed black;
}
</style>