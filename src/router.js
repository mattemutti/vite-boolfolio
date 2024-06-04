import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppBlog from "./views/AppBlog.vue";
import AppContacts from "./views/AppContacts.vue";
import AppSocial from "./views/AppSocial.vue";
import SingleProject from "./views/SingleProject.vue";
import NotFound from "./views/NotFound.vue";

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
			path: '/blog',
			name: 'blog',
			component: AppBlog,
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
		{
			path: '/show/:id',
			name: 'show',
			component: SingleProject,
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFound,
		}
	]
})
export default router;