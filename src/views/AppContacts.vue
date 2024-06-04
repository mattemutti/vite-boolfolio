<script>

export default {
	name: 'AppContacts'
}

</script>
<template>
	<div class="container text-center p-5">
		<h1>Contact Me</h1>
		<div class="mt-5"></div>
		<div class=" d-flex justify-content-center">
			<div class="col-4">
				<form action="">

					<div class="mb-3">

						<input type="name" class="input_box" name="name" id="name" aria-describedby="nameHelpId"
							placeholder="Name" />
						<small id="nameHelpId" class="form-text txt_color">Type your Name</small>
					</div>

					<div class="mb-3 py-4">

						<input type="email" class="input_box" name="email" id="email" aria-describedby="emailHelpId"
							placeholder="name@mail.com" />
						<small id="emailHelpId" class="form-text txt_color">Type your email</small>
					</div>
					<button class="btn btn-dark" type="submit">Send</button>
				</form>
			</div>
		</div>

	</div>
</template>
<style></style>