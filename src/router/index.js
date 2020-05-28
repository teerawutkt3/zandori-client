import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import RoutesConfig from "../router/routes"
Vue.use(VueRouter)

const routes = [
	{
		path: "",
		component: () => import("../loyout/Layout.vue"),
		children: [
			{
				path: "/",
				name: "Home",
				component: Home
			},
			{
				path: "/about",
				name: "About",
				component: () => import("../views/About.vue")
			}			
		]
	},
	RoutesConfig.pageContent,
	RoutesConfig.login
]

const router = new VueRouter({
	// mode: "history",
	mode: "hash",
	base: process.env.BASE_URL,
	routes
})

export default router
