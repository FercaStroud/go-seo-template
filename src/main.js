import { createApp, h } from "vue";
import App from "./App.vue";

import SoberBlack from "./views/soberBlack/SoberBlack.vue";
import SoberPortfolio from "./views/soberBlack/portfolio/Portfolio.vue";
import SoberBlog from "./views/soberBlack/blog/Blog.vue";
import SoberContact from "./views/soberBlack/contact/Contact.vue";
import SoberPost from "./views/soberBlack/post/Post.vue";

import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faRocket,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faLaptopCode,
  faRocket,
  faShoppingCart,
  faStar,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const routes = {
  "/": SoberBlack,
  "/template-1": SoberBlack,
  "/portfolio-sober": SoberPortfolio,
  "/blog-sober": SoberBlog,
  "/contact-sober": SoberContact,
  "/post-sober": SoberPost,
};

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent;
    },
  },

  render() {
    return h(this.CurrentComponent);
  },
};

createApp(SimpleRouter)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
