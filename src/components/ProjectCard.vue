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


	<div class="txt_color">

		<router-link :to="{ name: 'show', params: { id: project.id } }" class="
			text-decoration-none txt_color">
			<div class="txt_color text-center py-4">
				<h4>{{ project.title }}</h4> <span> / Type: {{ project.type.name }}</span>
			</div>
		</router-link>




		{{ project.create_data }}


	</div>


</template>
<style></style>