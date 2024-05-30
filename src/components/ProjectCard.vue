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
		<div class="row">
			<div class="row">
				<div class="title-car">
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
				Tech
				<span class="card-body px-2" v-for="technology in project.technologies">
					{{ technology.name }}
				</span>
			</div>
		</div>
	</div>
</template>
<style></style>