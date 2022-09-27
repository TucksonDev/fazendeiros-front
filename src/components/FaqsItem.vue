<script setup lang="ts"></script>

<template>
    <div class="accordion-item">
        <h2 :id="'heading' + itemId" class="accordion-header">
            <button
                :class="['accordion-button', { collapsed: !isExpanded }]"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse' + itemId"
                :aria-expanded="isExpanded ? 'true' : 'false'"
                :aria-controls="'collapse' + itemId"
            >
                {{ questionText }}
            </button>
        </h2>
        <div
            :id="'collapse' + itemId"
            :class="['accordion-collapse', 'collapse', { show: isExpanded }]"
            :aria-labelledby="'heading' + itemId"
            :data-bs-parent="'#' + parentId"
        >
            <div class="accordion-body">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-html="answerText"></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            questionText: {
                type: String,
                required: true,
                default: "Question",
            },
            answerText: {
                type: String,
                required: true,
                default: "Answer",
            },
            itemId: {
                type: String,
                required: true,
                default: "One",
            },
            isExpanded: {
                type: Boolean,
                default: false,
            },
            parentId: {
                type: String,
                default: "faqsBlock",
            },
        },
    };
</script>

<style scoped>
    .accordion-item {
        border-width: 0 0 var(--bs-accordion-border-width) 0;
    }

    .accordion-button {
        font-size: 1.5rem;
    }
</style>
