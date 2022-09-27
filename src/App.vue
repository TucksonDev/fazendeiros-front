<script setup lang="ts">
    import { RouterView } from "vue-router";
    import TopHeader from "@/components/template/TopHeader.vue";
    import EmailRegistration from "@/components/template/EmailRegistration.vue";
    import FooterSection from "@/components/template/FooterSection.vue";
</script>

<template>
    <TopHeader />
    <RouterView />
    <EmailRegistration />
    <FooterSection />
</template>

<style lang="scss">
    @import "@/assets/scss/custom_bootstrap";
    @import "~bootstrap/scss/bootstrap";
    @import "~bootstrap-icons/font/bootstrap-icons.css";
</style>
