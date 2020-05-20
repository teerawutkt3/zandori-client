// Modules menu
const baseComponent = {
  path: "/base-components",
  name: "BaseComponents",
  component: () => import("@/views/BaseComponents.vue")
};
const login = {
  path: "/login",
  name: "Login",
  component: () => import("../views/Login.vue")
};

export default {
  baseComponent,
  login
};
