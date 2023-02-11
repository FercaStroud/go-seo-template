import {createApp} from "vue";
import App from "./App.vue";
import './utils/axios';

import router from "./router";
import store from "./store";

import "./styles/style.scss";

import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faStore,
    // faShop,
    // faBoxArchive,
    // faPersonRunning,
    faShoppingCart,
    faStar,
    faPlay,
    faPhone,
    faEnvelope,
    faClock,
    faTruck,
    faPlus,
    faMinus,
    faTrash,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    // free solid
    faStore,
    // faShop,
    // faBoxArchive,
    // faPersonRunning,
    faShoppingCart,
    faStar,
    faPlay,
    faPhone,
    faEnvelope,
    faClock,
    faTruck,
    faPlus,
    faMinus,
    faTrash,
    faTimes,

    // free brands
    faFacebook,
    faTwitter,
    faInstagram,
    faWhatsapp
);

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

import {vfmPlugin} from 'vue-final-modal'

import {createMetaManager} from "vue-meta";

createApp(App)
    .use(store)
    .use(router)
    .use(vfmPlugin({
        key: '$vfm',
        componentName: 'VueFinalModal',
        dynamicContainerName: 'ModalsContainer'
    }))
    .use(createMetaManager())
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
