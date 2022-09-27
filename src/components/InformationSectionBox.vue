<script setup lang="ts"></script>

<template>
    <div class="information-section-box">
        <div v-if="iconClass" class="box-icon">
            <i :class="'bi bi-' + iconClass"></i>
        </div>
        <div class="box-title mb-4">
            {{ boxTitle }}
        </div>
        <div class="box-contents">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="boxContents"></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            boxTitle: {
                type: String,
                required: true,
                default: "Box title",
            },
            boxContents: {
                type: String,
                default: "Box contents",
            },
            iconClass: {
                type: String,
                default: null,
            },
        },
    };
</script>

<style scoped>
    .information-section-box {
        position: relative;
        background-color: var(--brand-gray);
        border-radius: 10px;
        margin-bottom: 60px;
        padding: 40px 40px;
        font-size: 1.25rem;
    }

    .box-icon {
        --box-icon-size: 60px;
        position: absolute;
        right: calc(var(--box-icon-size) / 2);
        top: calc(-1 * calc(var(--box-icon-size) / 2));
        height: var(--box-icon-size);
        width: var(--box-icon-size);
        background: black;
        border: 1px solid white;
        border-radius: 100%;
    }

    .box-icon i {
        display: block;
        width: 100%;
        text-align: center;
        margin-top: -2.5px;
        font-size: 2.5rem;
    }

    .box-title {
        font-weight: bold;
        font-size: 2.25rem;
    }
</style>
