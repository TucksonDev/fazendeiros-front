<template>
    <div class="locale-changer ms-auto">
        <select v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                {{ $t("locale." + locale) }}
            </option>
        </select>
    </div>
</template>

<style scoped>
    select {
        background: none;
        border: 0;
        color: var(--brand-yellow);
    }

    select option {
        color: var(--brand-dark);
    }
</style>
