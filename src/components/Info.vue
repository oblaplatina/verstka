<template>
    <section class="info">
        <div class="container-info">
            <img src="@/assets/images/campaign.png" alt="" class="campaign-img" />
            <div class="info-inner">
                <h2 class="section-info-title">
                    {{ $t('home.info.title') }}
                </h2>
                <p class="info-text">
                    {{ $t('home.info.description') }}
                </p>
                <ul class="info-list">
                    <li class="info-list-item" v-for="(item, index) in infoItems" :key="index">
                        {{ item }}
                    </li>
                </ul>
                <a href="#" class="info-inner-more-info">
                    {{ $t('home.info.button') }}
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, messages } = useI18n()

const infoItems = computed(() => {
    const items = messages.value[locale.value].home.info.list
    return items || []
})
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.info {
    margin-bottom: 151px;
    margin-left: 71px;

    .container-info {
        display: flex;
        margin: 0 auto;
        gap: 154px;

        .campaign-img {
            width: 558px;
            height: 427px;
        }

        .info-inner {
            margin-top: 15px;

            .section-info-title {
                font-size: 35px;
                font-weight: 500;
                color: $color-primary;
                line-height: 1.4;
                margin-bottom: 20px;
            }

            .info-text {
                font-size: 16px;
                font-weight: 400;
                color: $color-text;
                line-height: 1.8;
                margin-bottom: 20px;
            }

            .info-list {
                margin-bottom: 24.5px;

                .info-list-item {
                    position: relative;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 2.1;
                    color: $color-text;
                    margin-bottom: 15px;
                    padding-left: 34px;

                    &::before {
                        content: url("@/assets/images/info-checkmark.svg");
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
            }

            .info-inner-more-info {
                font-size: 14px;
                font-weight: 400;
                line-height: 2.1;
                color: $color-primary;
                margin-left: 34px;
            }
        }
    }

    @media (max-width: 1186px) {
        margin-left: 0;

        .container-info {
            gap: 50px;

            .campaign-img {
                width: 50%;
                height: 50%;
            }

            .info-inner {
                .section-info-title {
                    font-size: 25px;
                }

                .info-text {
                    font-size: 14px;
                }

                .info-list {
                    .info-list-item {
                        font-size: 12px;
                    }
                }

                .info-inner-more-info {
                    font-size: 12px;
                }
            }
        }
    }

    @media (max-width: 720px) {
        .container-info {
            flex-direction: column-reverse;
            align-items: center;
            gap: 0;

            .campaign-img {
                width: 75%;
                height: 75%;
            }

            .info-inner {
                margin-left: 0;
                margin-bottom: 15px;

                .section-info-title {
                    font-size: 20px;
                }

                .info-text {
                    font-size: 16px;
                }

                .info-list {
                    .info-list-item {
                        font-size: 14px;
                    }
                }

                .info-inner-more-info {
                    font-size: 14px;
                }
            }
        }
    }
}
</style>