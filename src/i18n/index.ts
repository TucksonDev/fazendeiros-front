// Core library
import { createI18n } from "vue-i18n";

// Locales
import messagesEN from "@/i18n/en";
import messagesES from "@/i18n/es";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    availableLocales: ["en", "es"],
    messages: {
        en: messagesEN,
        es: messagesES,
    },
});

export default i18n;
