<script>
import AppBanner from '../components/AppBanner.vue';

export default {
	name: 'AppHome',
	components: {
		AppBanner,
	}
}

</script>
<template>
	<div class="container">

		<AppBanner title="Matte's Portfolio" lead-text="Read our projects" call-to-action="Find more Projects"
			call-to-action-url="projects" />
		<div class="text-center pb-5">
			<h1>Welcome my Portfolio</h1>
		</div>

	</div>
</template>
<style></style>