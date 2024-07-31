import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import router from './router.js'

createApp(App).use(router).mount('#app')


// Cursor
const cursor = document.getElementById('cursor')
const shadow = document.getElementById('cursor-shadow')
const links = document.querySelectorAll('a')
const coords = {
	x: 0,
	y: 0
}
const prevCoords = {
	x: 0,
	y: 0
}

window.addEventListener('mousemove', function (e) {
	//console.log(e.clientX, e.clientY);
	coords.x = e.clientX
	coords.y = e.clientY
})

function update() {
	cursor.style.top = `${coords.y}px`
	cursor.style.left = `${coords.x}px`

	const y = lerp(prevCoords.y, coords.y, 0.2)
	const x = lerp(prevCoords.x, coords.x, 0.2)
	shadow.style.top = `${y}px`
	shadow.style.left = `${x}px`

	prevCoords.x = x
	prevCoords.y = y

	requestAnimationFrame(update)
}

requestAnimationFrame(update)

function lerp(a, b, t) {
	return a * (1 - t) + b * t
}

links.forEach((link) => {
	link.addEventListener("mouseover", function () {
		cursor.classList.add('hover');
		shadow.classList.add('hover');
	});
	link.addEventListener("mouseleave", function () {
		cursor.classList.remove('hover');
		shadow.classList.remove('hover');
	})

});