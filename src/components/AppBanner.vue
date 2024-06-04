<script>
export default {
	name: 'AppBanner',
	props: {
		'title': String,
		'leadText': String,
		'callToAction': String,
		'callToActionUrl': String

	}
}

</script>
<template>

	<div class="banner py-5">
		<div class="container txt_color">
			<h1>{{ title }}</h1>
			<p>
				{{ leadText }}
			</p>
			<router-link class="btn btn-dark txt_color" :to="{ name: callToActionUrl }">{{ callToAction }}</router-link>

		</div>
	</div>

</template>
<style></style>