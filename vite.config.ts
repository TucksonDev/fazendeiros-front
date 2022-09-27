import { fileURLToPath, URL } from "node:url";

import { defineConfig, splitVendorChunkPlugin } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(() => {
    const config = {
        plugins: [vue(), splitVendorChunkPlugin()],

        // Resolve
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
                "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
                "~bootstrap-icons": path.resolve(__dirname, "node_modules/bootstrap-icons"),
            },
        },

        // Build
        build: {
            chunkSizeWarningLimit: 1000,
        },
    };

    return config;
});
