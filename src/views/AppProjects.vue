<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';

export default {
	name: 'AppProjects',

	components: {
		ProjectCard
	},

	data() {
		return {
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

	<div class="container">
		<div class="row">

			<ProjectCard :project="project" :key="project.id" v-for="project in projects.data"
				:base_api_url="base_api_url" />

		</div>
	</div>
</template>
<style></style>