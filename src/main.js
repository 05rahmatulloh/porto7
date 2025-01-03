import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";

// Import CSS
import "./assets/main.css";
import "./assets/tailwind.css";
import "./assets/isi.css";

// Import Font
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faLinkedin, faSearch, faLink);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

// app.use(router);

app.mount("#app");
