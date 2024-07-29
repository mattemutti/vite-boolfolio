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

		}
	},
	methods: {
		sendMessage() {
			const data = {
				name: this.name,
				email: this.email,
				message: this.message,
			}

			const apiUrl = `${this.base_api_url}/api/contacts`;

			axios.post(apiUrl, data)
				.then(response => {
					console.log(response);
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

						<input type="name" class="input_box" name="name" id="name" aria-describedby="nameHelpId"
							placeholder=" Nome" v-model="name" />
						<!-- <small id="nameHelpId" class="form-text txt_color">Inserisci il tuo nome</small> -->
					</div>

					<div class="mb-3 py-4">

						<input type="email" class="input_box" name="email" id="email" aria-describedby="emailHelpId"
							placeholder=" name@gmail.com" v-model="email" />
						<!-- <small id="emailHelpId" class="form-text txt_color">Inserisci la tua email</small> -->
					</div>

					<div class="mb-3">
						<textarea class="text_box" name="message" id="message" cols="40" rows="6"
							placeholder=" Scrivi il tuo messaggio" v-model="message"></textarea>
					</div>

					<button class="btn btn-dark" type="submit">Send</button>
				</form>
			</div>
		</div>

	</div>
</template>
<style></style>