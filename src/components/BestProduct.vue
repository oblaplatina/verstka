<template>
    <section class="best-products">
        <div class="products-shadow"></div>
        <div class="best-products-inner">
            <h2 class="section-best-products-title">{{ $t('home.bestProducts.title') }}</h2>
            <p class="section-best-product-subtitle">{{ $t('home.bestProducts.subtitle') }}</p>
            <div class="product-container">
                <div class="product-card" v-for="(product, index) in productList" :key="index">
                    <img src="@/assets/images/product-card-icon.svg" alt="" class="product-card-icon">
                    <h3 class="product-card-title">{{ product.title }}</h3>
                    <p class="product-card-text">{{ product.text }}</p>
                    <AppButton :text="product.button" variant="product" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'

const { locale, messages } = useI18n()
const productList = computed(() => {
    const loc = locale.value;
    return messages.value[loc].home.bestProducts?.products || [];
})
</script>

<style lang="scss" scoped>
.best-products {
    display: flex;
    text-align: center;
    margin-bottom: 154px;

    .products-shadow {
        text-align: center;
        position: absolute;
        width: 100%;
        left: 0;

        &::before {
            content: "";
            position: absolute;
            top: -81px;
            left: 0;
            width: 100%;
            height: 70vh;
            z-index: -1;
            background: linear-gradient(180deg, $color-bg-light -45.04%, rgba(248, 248, 248, 0) 88.56%);
        }
    }

    .best-products-inner {
        max-width: 1140px;
    }

    .section-best-products-title {
        font-size: 35px;
        font-weight: 500;
        line-height: 1.4;
        color: $color-secondary;
        margin-bottom: 20px;
    }

    .section-best-product-subtitle {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.8;
        color: $color-text;
        margin-bottom: 80px;
        margin-left: 182px;
        margin-right: 182px;
    }

    .product-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px;

        .product-card {
            background: $color-white;
            padding: 20px 27px 37px 36px;
            border-radius: 24px;
            box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
            max-width: 360px;
            text-align: left;

            .product-card-icon {
                margin-bottom: 20px;
            }

            .product-card-title {
                font-size: 18px;
                font-weight: 500;
                line-height: 1.7;
                color: $color-bg-base;
                margin-bottom: 16px;
            }

            .product-card-text {
                font-size: 18px;
                font-weight: 400;
                line-height: 1.7;
                color: $color-bg-base;
                margin-bottom: 46.3px;
            }
        }
    }

    @media (max-width: $bp-1186) {
        .section-best-products-title {
            font-size: 25px;
        }

        .best-products-inner {
            margin-top: -50px;
        }

        .section-best-product-subtitle {
            font-size: 14px;
            margin-bottom: 40px;
            margin-left: 0;
            margin-right: 0;
        }

        .product-card-title {
            font-size: 16px;
        }

        .product-card-text {
            font-size: 16px;
        }
    }

    @media (max-width: $bp-790) {
        .product-card {
            flex: 0 1 calc(50% - 15px);
            max-width: 100%;
        }

        .product-container {
            gap: 15px;
        }

        margin-bottom: 90px;
    }

    @media (max-width: $bp-630) {
        .section-best-products-title {
            font-size: 20px;
        }

        .section-best-product-subtitle {
            font-size: 12px;
            margin-bottom: 30px;
        }

        .product-card-title {
            font-size: 12px;
        }

        .product-card-text {
            font-size: 12px;
        }
    }

    @media (max-width: $bp-470) {
        .section-best-products-title {
            font-size: 25px;
        }

        .section-best-product-subtitle {
            font-size: 14px;
            margin-bottom: 40px;
            margin-left: 0;
            margin-right: 0;
        }

        .product-card {
            flex: 0 1 100%;
            max-width: 360px;
        }

        .product-card-title {
            font-size: 16px;
        }

        .product-card-text {
            font-size: 16px;
        }
    }
}
</style>