<script>


export default {
	name: 'ProjectCard',

	props: {
		project: Object,
		base_api_url: String,

	},

	data() {
		return {




		}
	},
}
</script>
<template>


	<div class="col-lg-3 col-md-4 col-sm-6 g-4 py-4">
		<div class="card p-2">

			<div class="title-card ">
				{{ project.title }}
			</div>
			<img :src="base_api_url + '/storage/' + project.cover_image" alt="" class="py-4">
			<!-- <div class="card-body">
					Description: {{ project.description }}
				</div> -->
			<!-- <div class="card-body">
					Video: {{ project.video }}
				</div>
				<div class="card-body">
					Repo: {{ project.repo }}
				</div>
				<div class="card-body">
					Type: {{ project.type.name }}
				</div>
				<div class="card-body">
					Data: {{ project.create_data }}
				</div>
				Tech
				<span class="card-body" v-for="technology in project.technologies">
					{{ technology.name }}
				</span> -->
		</div>
	</div>


</template>
<style></style>