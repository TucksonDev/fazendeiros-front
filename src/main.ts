// Core libraries
import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag";

// Custom imports
import App from "@/App.vue";
import router from "./router";
import i18n from "./i18n";

// Create the Pinia store
const store = createPinia();

// Create App
const app = createApp(App);

// Pass the router
app.use(router);

// Pass the store
app.use(store);

// Pass the locale object
app.use(i18n);

// GoogleTag
if (import.meta.env.VITE_GA_ID) {
    app.use(
        VueGtag,
        {
            config: {
                id: import.meta.env.VITE_GA_ID,
            },
        },
        router
    );
}

// Mount the app
app.mount("#app");

// Bootstrap
import "bootstrap/dist/js/bootstrap.js";
