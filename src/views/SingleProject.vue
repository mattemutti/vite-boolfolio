<script>
import ProjectCard from '../components/ProjectCard.vue';
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';

export default {
	name: 'SingleProject',
	components: {
		ProjectCard,
		AppBanner,
	},

	data() {
		return {
			base_api_url: 'http://127.0.0.1:8000',
			base_project_url: '/api/projects',
			project: '',
			loading: true,
		}
	},
	methods: {
		callApi(url) {
			axios.get(url)
				.then(response => {
					console.log(response);
					if (response.data.success) {
						console.log(response.data.response);
						this.project = response.data.response;
						this.loading = false;
					} else {
						this.$router.push({ name: 'not-found' })
					}

				})
				.catch(err => {
					console.error(err);
				})
		},



	},
	mounted() {
		console.log(this.base_api_url, this.base_project_url, `/${this.$route.params.id}`);
		let url = this.base_api_url + this.base_project_url + `/${this.$route.params.id}`;
		this.callApi(url);

	}
}
</script>
<template>

	<div>
		<!-- The current route is accessible as $route in the template -->
		<!-- {{ $route.params.id }} -->


		<div class="text-end">
			<h2 class="">{{ project.title }}</h2>
		</div>
		<div class="text-center">
			<img :src="base_api_url + '/storage/' + project.cover_image" alt="" class="py-4">
		</div>
		<div class="text-end p-4">
			{{ project.description }}
		</div>

		<div class="d-flex justify-content-between p-2">
			<div class="">
				{{ project.code }}
			</div>
			<div>
				{{ project.repo }}
			</div>
		</div>
		<div class="" v-if="project.technologies">
			<div class="text-center" v-for="tech in project.technologies">
				{{ tech.name }}
			</div>
		</div>
		<div class="text-end" v-if="project.type">
			{{ project.type.name }}
		</div>
	</div>

</template>
<style></style>