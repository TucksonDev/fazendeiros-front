<script setup lang="ts">
    import FaqsItem from "@/components/FaqsItem.vue";
</script>

<template>
    <div class="container mt-5">
        <h2 class="section-title">{{ $t("faqs.title") }}</h2>
        <div id="faqsBlock" class="accordion">
            <FaqsItem :question-text="$t('faqs.faq1Question')" :answer-text="$t('faqs.faq1Answer')" item-id="One" />
            <FaqsItem :question-text="$t('faqs.faq2Question')" :answer-text="$t('faqs.faq2Answer')" item-id="Two" />
            <FaqsItem :question-text="$t('faqs.faq3Question')" :answer-text="$t('faqs.faq3Answer')" item-id="Three" />
            <FaqsItem :question-text="$t('faqs.faq7Question')" :answer-text="$t('faqs.faq7Answer')" item-id="Seven" />
            <FaqsItem :question-text="$t('faqs.faq4Question')" :answer-text="$t('faqs.faq4Answer')" item-id="Four" />
            <FaqsItem :question-text="$t('faqs.faq5Question')" :answer-text="$t('faqs.faq5Answer')" item-id="Five" />
            <FaqsItem :question-text="$t('faqs.faq6Question')" :answer-text="$t('faqs.faq6Answer')" item-id="Six" />
            <FaqsItem :question-text="$t('faqs.faq8Question')" :answer-text="$t('faqs.faq8Answer')" item-id="Eight" />
            <FaqsItem :question-text="$t('faqs.faq9Question')" :answer-text="$t('faqs.faq9Answer')" item-id="Nine" />
            <FaqsItem :question-text="$t('faqs.faq10Question')" :answer-text="$t('faqs.faq10Answer')" item-id="Ten" />
            <FaqsItem
                :question-text="$t('faqs.faq11Question')"
                :answer-text="$t('faqs.faq11Answer')"
                item-id="Eleven"
            />
            <FaqsItem
                :question-text="$t('faqs.faq12Question')"
                :answer-text="$t('faqs.faq12Answer')"
                item-id="Twelve"
            />
        </div>
    </div>
</template>
