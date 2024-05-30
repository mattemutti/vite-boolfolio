<script>


export default {
	name: 'ProjectCard',

	props: {
		project: Object,
	}
}
</script>
<template>

	<div class="container">
		<div class="row col">
			<div class="">

				<div class="title-card">
					{{ project.title }}
				</div>
				<img :src="project.cover_image" alt="">
				<div class="card-body">
					Description: {{ project.description }}
				</div>
				<div class="card-body">
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
				</span>

			</div>
		</div>
	</div>
</template>
<style></style>