import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLaptopCode,
  faRocket,
  faShoppingCart,
  faStar,
  faClock,
  faTruck,
  faPlus,
  faMinus,
  faTrash,
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
  faPlus,
  faMinus,
  faTrash,

  // free brands
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { createMetaManager } from 'vue-meta'


createApp(App)
  .use(store)
  .use(router)
  .use(createMetaManager())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
