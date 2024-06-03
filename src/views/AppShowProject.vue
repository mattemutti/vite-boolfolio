<script>
import ProjectCard from '../components/ProjectCard.vue';
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';

export default {
	name: 'AppShowProject',
	components: {
		ProjectCard,
		AppBanner,
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
		},

		nextPage(url) {
			//console.log(url);
			this.callApi(url);
		},

		prevPage(url) {
			//console.log(url);
			this.callApi(url);
		},

		goTo(page) {
			const url = this.base_api_url + this.base_project_url + `?page=${page}`
			this.callApi(url);
		},

		showProject(id) {

		}
	},
	mounted() {
		let url = this.base_api_url + this.base_project_url;
		this.callApi(url);
	}
}

</script>
<template>

	<div>
		<!-- The current route is accessible as $route in the template -->
		User {{ $route.params.id }}
	</div>

</template>
<style></style>