// Modules menu
const pageContent = {
	path: '', component: () => import('../loyout/Layout'),
	children: [
		{
			path: "/base-components", name: "BaseComponents", component: () => import("@/views/BaseComponents.vue")
		},
		{
			path: "/shopping-card", name: "Shopping Card", component: () => import("@/views/ShoppingCard.vue")
		}
	]
}
const login = {
	path: "/login",
	name: "Login",
	component: () => import("../views/Login.vue")
}

export default {
	pageContent,
	login
}
