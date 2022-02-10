import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faRocket,
  faShoppingCart,
  faStar,
  faClock,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  // free solid
  faLaptopCode,
  faRocket,
  faShoppingCart,
  faStar,
  faClock,
  faTruck,

  // free brands
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
