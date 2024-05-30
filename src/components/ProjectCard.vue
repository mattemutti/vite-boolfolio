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
				<div class="card-body">
					{{ project.description }}
				</div>
			</div>
		</div>
	</div>
</template>
<style></style>