<script>
import axios from 'axios';


export default {
	name: 'AppContacts',
	data() {
		return {
			base_api_url: 'http://127.0.0.1:8000',
			name: '',
			email: '',
			message: '',
			loading: false,
			success: false,
			errors: {},

		}
	},
	methods: {
		sendMessage() {
			this.loading = true;
			const data = {
				name: this.name,
				email: this.email,
				message: this.message
			};

			this.errors = {};

			const apiUrl = `${this.base_api_url}/api/contacts`

			axios.post(apiUrl, data)
				.then(resp => {
					console.log(resp);

					if (resp.data.success) {
						this.name = ''
						this.email = ''
						this.message = ''
						this.success = resp.data.message

					} else {
						this.errors = resp.data.errors
					}

					this.loading = false;
				})
				.catch(err => {
					console.error(err);
				})


		}
	}
}

</script>
<template>
	<div class="container text-center p-5">
		<h1>Conttattami</h1>
		<div class="mt-5"></div>
		<div class=" d-flex justify-content-center">
			<div class="col-4">

				<form @submit.prevent="sendMessage()">

					<div class="mb-3">
						<input type="name" class="input_box" name="name" id="name"
							:class="{ 'is-invalid': errors.name }" aria-describedby="nameHelpId" placeholder=" Nome"
							v-model="name" />
						<p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="">
							Il nome è obbligatorio
						</p>
					</div>
					<div class="mb-3 py-4">
						<input type="email" class="input_box" name="email" id="email"
							:class="{ 'is-invalid': errors.email }" aria-describedby="emailHelpId"
							placeholder=" nome@gmail.com" v-model="email" />
						<p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="">
							L'email è obbligatoria
						</p>
					</div>

					<div class="mb-3">
						<textarea class="text_box" name="message" id="message" cols="40" rows="6"
							:class="{ 'is-invalid': errors.message }" placeholder=" Scrivi il tuo messaggio"
							v-model="message"></textarea>
						<p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="">
							Il messaggio è obbligatorio
						</p>
					</div>

					<button class="btn btn-dark" type="submit" :disabled="loading">Invia</button>
				</form>
			</div>
		</div>

	</div>
</template>
<style></style>