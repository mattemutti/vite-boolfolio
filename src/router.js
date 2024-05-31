import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppHome from "./views/AppAbout.vue";
import AppHome from "./views/AppProjects.vue";
import AppHome from "./views/AppPosts.vue";
import AppHome from "./views/AppContacts.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: AppHome,
		},
		{
			path: '/about',
			name: 'about',
			component: AppAbout,
		},
		{
			path: '/projects',
			name: 'projects',
			component: AppProjects,
		},
		{
			path: '/blogs',
			name: 'blogs',
			component: AppBlogs,
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: AppContacts,
		},
	]
})

export default router;