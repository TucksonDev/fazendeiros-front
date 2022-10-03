<script setup lang="ts"></script>

<template>
    <div class="banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">
                    <!-- eslint-disable-next-line vue/no-v-html -->
                    <h1 class="banner-title text-center" v-html="bannerTitle"></h1>
                </div>
                <div class="col-12">
                    <h4 class="banner-description text-center">{{ bannerDescription }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            bannerTitle: {
                type: String,
                required: true,
                default: "Banner title",
            },
            bannerDescription: {
                type: String,
                default: "Banner description",
            },
        },
    };
</script>

<style scoped>
    .banner {
        padding: 75px 0;
    }

    .banner-title {
        font-size: 72px;
        font-weight: 900;
        text-transform: uppercase;
        background: linear-gradient(to right, var(--brand-blue), var(--brand-yellow));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        .banner-title {
            font-size: 48px;
        }
    }

    @media (max-width: 420px) {
        .banner-title {
            font-size: 2.5rem;
        }
    }
</style>
