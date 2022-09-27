<script setup lang="ts"></script>

<template>
    <div id="email-registration" class="container mt-5">
        <h2 class="section-title">{{ $t("emailRegistration.title") }}</h2>
        <div class="section-introduction">{{ $t("emailRegistration.introText") }}</div>

        <!-- Mailchimp Signup Form -->
        <div class="signup-form">
            <form
                id="mc-embedded-subscribe-form"
                action="https://gmail.us12.list-manage.com/subscribe/post?u=59329a737a11fbeaae1e8edc3&amp;id=3f084b94f0&amp;f_id=007eb6e0f0"
                method="post"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
            >
                <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                        <input
                            id="mce-EMAIL"
                            type="email"
                            value=""
                            name="EMAIL"
                            class="required email"
                            placeholder="E-mail address"
                            required
                        />
                        <input
                            id="mc-embedded-subscribe"
                            type="submit"
                            :value="$t('emailRegistration.buttonText')"
                            name="subscribe"
                            class="btn btn-primary"
                        />
                        <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                    </div>
                    <div id="mce-responses" class="clear foot">
                        <div id="mce-error-response" class="response" style="display: none"></div>
                        <div id="mce-success-response" class="response" style="display: none"></div>
                    </div>
                    <!-- Bot defender -->
                    <div style="position: absolute; left: -5000px" aria-hidden="true">
                        <input type="text" name="b_59329a737a11fbeaae1e8edc3_3f084b94f0" tabindex="-1" value="" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        mounted() {
            const mailchimpScript = document.createElement("script");
            mailchimpScript.setAttribute("src", "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js");
            document.head.appendChild(mailchimpScript);

            (function () {
                window.fnames = [];
                window.ftypes = [];
                window.fnames[0] = "EMAIL";
                window.ftypes[0] = "email";
            });
        },
    };
</script>

<style scoped>
    #email-registration {
        margin-bottom: 60px;
    }

    .section-introduction {
        margin-bottom: 1rem;
    }

    .signup-form .mc-field-group input[type="email"] {
        padding: 5px;
        width: 500px;
    }
    .signup-form .mc-field-group input[type="submit"] {
        vertical-align: top;
        margin-left: 10px;
    }
</style>
