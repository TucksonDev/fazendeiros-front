<script setup lang="ts">
    import PageBanner from "@/components/PageBanner.vue";
    import InformationSectionBox from "@/components/InformationSectionBox.vue";
    import NoMintBlock from "../components/NoMintBlock.vue";
    import FaqsBlock from "@/components/FaqsBlock.vue";
    import { MenuLinks } from "@/constants";
</script>

<template>
    <PageBanner :banner-title="$t('banner.title')" :banner-description="$t('banner.description')" />
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <InformationSectionBox
                        icon-class="info"
                        :box-title="$t('informationSection.leftBoxTitle')"
                        :box-contents="$t('informationSection.leftBoxContents')"
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 offset-lg-4">
                    <InformationSectionBox
                        icon-class="suit-diamond-fill"
                        :box-title="
                            $t('informationSection.rightBoxTitle', { applicationFormLink: MenuLinks.APPLICATION_FORM })
                        "
                        :box-contents="$t('informationSection.rightBoxContents')"
                    />
                </div>
            </div>
        </div>
        <NoMintBlock />
        <FaqsBlock />
    </main>
</template>
