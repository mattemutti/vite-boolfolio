<script>
import ProjectCard from '../components/ProjectCard.vue';
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';

export default {
	name: 'AppProjects',
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
			id: [],
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
					console.error(err);
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
		console.log(this.base_api_url, this.base_project_url);
		let url = this.base_api_url + this.base_project_url;
		this.callApi(url);
	}
}

</script>
<template>
	<div class="container">
		<div class="row" v-if="!loading">
			<ProjectCard v-for="project in  projects.data" :project="project" :key="project.id"
				:base_api_url="base_api_url">

			</ProjectCard>
		</div>
		<div class=" row" v-else>
			<div class="col">
				Loading...
			</div>
		</div>

		<!-- Paginate -->
		<nav aria-label="Page navigation">
			<ul class="pagination d-flex justify-content-between">
				<li class="page-item text_dark" v-show="projects.prev_page_url"
					@click="prevPage(projects.prev_page_url)">
					<button class="page-link text_dark" aria-label="Previous">
						<span class="text-dark" aria-hidden="true">&laquo;</span>
					</button>
				</li>

				<li class="page-item" :class="{ 'active': page == projects.current_page }" :aria-current="page"
					v-for=" page  in  projects.last_page " @click="goTo(page)">
					<button class="page-link text-dark">{{ page }}</button>
				</li>

				<li class="page-item" v-show="projects.next_page_url">
					<button class="page-link" aria-label="Next" @click="nextPage(projects.next_page_url)">
						<span class="text-dark" aria-hidden="true">&raquo;</span>
					</button>
				</li>
			</ul>
		</nav>

	</div>
</template>
<style></style>