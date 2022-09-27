<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import { SocialNetworks, MenuLinks } from "@/constants";
</script>

<template>
    <hr />
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <div>
                <RouterLink to="/" class="navbar-brand">Fazendeiros Digitales</RouterLink><br />
                <a :href="'mailto:' + MenuLinks.EMAIL">{{ MenuLinks.EMAIL }}</a>
            </div>
            <div>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a :href="MenuLinks.WHITEPAPER" target="_blank" class="nav-link">
                            {{ $t("menu.whitepaperLinkLabel") }}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a :href="MenuLinks.PODCAST" target="_blank" class="nav-link">
                            {{ $t("menu.podcastLinkLabel") }}
                        </a>
                    </li>
                    <li v-if="SocialNetworks.TWITTER" class="nav-item">
                        <a :href="SocialNetworks.TWITTER" target="_blank" class="nav-link">
                            <i class="bi bi-twitter"></i>
                        </a>
                    </li>
                    <li v-if="SocialNetworks.DISCORD" class="nav-item">
                        <a :href="SocialNetworks.DISCORD" target="_blank" class="nav-link">
                            <i class="bi bi-discord"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .nav-link,
    .nav-link:hover,
    .nav-link:focus {
        color: var(--brand-yellow);
    }
</style>
