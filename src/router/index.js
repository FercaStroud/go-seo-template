import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

import SoberBlack from "../views/soberBlack/SoberBlack.vue";
import SoberPortfolio from "../views/soberBlack/portfolio/Portfolio.vue";
import SoberBlog from "../views/soberBlack/blog/Blog.vue";
import SoberPost from "../views/soberBlack/post/Post.vue";
import SoberContact from "../views/soberBlack/contact/Contact.vue";

import FlatColor from "../views/flatColor/FlatColor.vue";
import FlatPortfolio from "../views/flatColor/portfolio/Portfolio.vue";

const soberRoutes = [
  {
    path: "/portfolio-sober",
    name: "SoberPortfolio",
    component: SoberPortfolio,
  },
  {
    path: "/blog-sober",
    name: "SoberBlog",
    component: SoberBlog,
  },
  {
    path: "/post-sober",
    name: "SoberPost",
    component: SoberPost,
  },
  {
    path: "/contact-sober",
    name: "SoberContact",
    component: SoberContact,
  },
];

const flatRoutes = [
  {
    path: "/portfolio-flat",
    name: "portfolioFlat",
    component: FlatPortfolio,
  },
];

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/template-1",
    name: "SoberBlack",
    component: SoberBlack,
  },
  ...soberRoutes,
  {
    path: "/template-2",
    name: "FlatColor",
    component: FlatColor,
  },
  ...flatRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
