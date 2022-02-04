import { createApp, h } from "vue";
import App from "./App.vue";
import SoberBlack from "./views/soberBlack/SoberBlack.vue";
import SoberContact from "./views/soberBlack/contact/Contact.vue";
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
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faLaptopCode,
  faRocket,
  faShoppingCart,
  faStar,
  faFacebook,
  faTwitter,
  faInstagram
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const routes = {
  "/": SoberBlack,
  "/portfolio-sober": SoberBlack,
  "/blog-sober": SoberBlack,
  "/contact-sober": SoberContact,
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
