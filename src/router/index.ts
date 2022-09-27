import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

// Default page title
const defaultTitle = "Fazendeiros DAO";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
            meta: {
                title: "Fazendeiros DAO",
            },
        },
    ],
});

router.afterEach((to, from, failure) => {
    if (!failure) {
        document.title = (to.meta.title as string) || defaultTitle;
    }
});

export default router;
