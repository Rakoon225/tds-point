import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import SubPage from '../views/SubPage.vue'
import OwnPage from '../views/OwnPage.vue'
import InfPage from '../views/InfPage.vue'
import CoderPage from '../views/CoderPage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: MainPage
	},
	{
		path: '/inf',
		name: 'inf',
		component: InfPage
	},
	{
		path: '/sub:service',
		name: 'sub',
		component: SubPage
	},
	{
		path: '/sub/own:id:service',
		name: 'ownPage',
		component: OwnPage
	},
	{
		path: '/coder:param',
		name: 'coder',
		component: CoderPage
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior (to, from, savedPosition) {
	  // вместо возвращения объекта, необходимо вызвать window.scrollTo
	  window.scrollTo(0, 0);
	}
  })

export default router
