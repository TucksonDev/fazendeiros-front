<script setup lang="ts">
    import { RouterLink } from "vue-router";
    import LocaleChanger from "./LocaleChanger.vue";
    import { SocialNetworks, MenuLinks } from "@/constants";
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMainMenu"
                aria-controls="navbarMainMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <RouterLink to="/" class="navbar-brand">
                <img src="@/assets/images/logo-f.png" />
                <div class="brand-separator"></div>
                <span>Fazendeiros DAO</span>
            </RouterLink>
            <div id="navbarMainMenu" class="collapse navbar-collapse">
                <LocaleChanger />
                <div class="separator d-none d-lg-block">|</div>
                <ul class="navbar-nav mb-2 mb-lg-0">
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
    .navbar-brand img {
        height: 50px;
    }

    .navbar-brand .brand-separator {
        display: inline-block;
        margin: 0 1rem;
        vertical-align: middle;
        height: 30px;
        width: 1px;
        background-color: #666;
    }

    .navbar-brand span {
        display: inline-block;
        vertical-align: middle;
        font-size: 24px;
    }

    .nav-link,
    .nav-link:hover,
    .nav-link:focus {
        color: var(--brand-yellow);
    }

    .separator {
        margin: 0 1rem;
        color: var(--brand-yellow);
    }
</style>
