import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/home/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/terms-and-conditions",
    name: "TermsAndConditions",
    component: () => import('../views/terms-and-conditions/TermsAndConditions.vue'),
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import('../views/privacy-policy/PrivacyPolicy.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
