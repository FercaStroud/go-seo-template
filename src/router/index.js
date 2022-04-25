import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

import SoberBlack from "../views/soberBlack/SoberBlack.vue";
import SoberPortfolio from "../views/soberBlack/portfolio/Portfolio.vue";
import SoberBlog from "../views/soberBlack/blog/Blog.vue";
import SoberPost from "../views/soberBlack/post/Post.vue";
import SoberContact from "../views/soberBlack/contact/Contact.vue";

import FlatColor from "../views/flatColor/FlatColor.vue";
import FlatPortfolio from "../views/flatColor/portfolio/Portfolio.vue";
import FlatProducts from "../views/flatColor/products/Products.vue";
import FlatProduct from "../views/flatColor/product/Product.vue";
import FlatShoppingCart from "../views/flatColor/ShoppingCart/ShoppingCart.vue";
import FlatContact from "../views/flatColor/contact/Contact.vue";

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
  {
    path: "/products-flat",
    name: "productsFlat",
    component: FlatProducts,
  },
  {
    path: "/product-flat",
    name: "productFlat",
    component: FlatProduct,
  },
  {
    path: "/cart-flat",
    name: "cartFlat",
    component: FlatShoppingCart,
  },
  {
    path: "/contact-flat",
    name: "contactFlat",
    component: FlatContact,
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
