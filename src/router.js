import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppBlogs from "./views/AppBlogs.vue";
import AppContacts from "./views/AppContacts.vue";
import AppSocial from "./views/AppSocial.vue";

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
		{
			path: '/social',
			name: 'social',
			component: AppSocial,
		},
	]
})

export default router;