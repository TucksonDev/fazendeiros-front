<script setup lang="ts"></script>

<template>
    <div id="no-mint-block" class="container">
        <div class="row">
            <div class="col-lg-9">
                <h2 class="section-title">{{ $t("mint.title") }}</h2>
                <div class="section-intro mb-4">
                    {{ $t("mint.intro") }}
                </div>
            </div>
            <div id="nft-image" class="col-lg-3 order-first order-lg-last">
                <img src="@/assets/images/nft-image.png" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    #no-mint-block {
        font-size: 1.25rem;
        background-color: var(--brand-gray);
        padding: 40px 40px;
        border-radius: 10px;
    }

    .section-intro {
        text-align: justify;
    }

    #nft-image img {
        width: 100%;
        margin-top: -40px;
        margin-bottom: -40px;
        /* box-shadow: 0 0 25px 5px rgba(255, 255, 255, 0.4); */
    }
</style>
