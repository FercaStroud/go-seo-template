import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/home/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/store",
    name: "Store",
    component: () => import('../views/store/Store.vue'),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: () => import('../views/products/Product.vue'),
  },
  {
    path: "/terms-and-conditions",
    name: "TermsAndConditions",
    component: () => import('../views/terms-and-conditions/TermsAndConditions.vue'),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import('../views/services/Services.vue'),
  },
  {
    path: "/service/:id",
    name: "Service",
    component: () => import('../views/Service.vue'),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import('../views/blog/Blog.vue'),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import('../views/portfolio/Portfolio.vue'),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import('../views/contact/Contact.vue'),
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
