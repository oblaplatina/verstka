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
<style>
.info {
    margin-bottom: 151px;
    margin-left: 71px;
}

.container-info {
    display: flex;
    margin: 0 auto;
    gap: 154px;
}

.info-inner {
    margin-top: 15px;
}



.section-info-title {
    font-size: 35px;
    font-weight: 500;
    color: #8CC5F9;
    line-height: 1.4;
    margin-bottom: 20px;
}

.info-text {
    font-size: 16px;
    font-weight: 400;
    color: #4F5665;
    line-height: 1.8;
    margin-bottom: 20px;
}

.info-list {
    margin-bottom: 24.5px;
}

.campaign-img {
    width: 558px;
    height: 427px;
}

.info-list-item {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    line-height: 2.1;
    color: #4F5665;
    margin-bottom: 15px;
    padding-left: 34px;
}

.info-list-item::before {
    content: url('@/assets/images/info-checkmark.svg');
    position: absolute;
    left: 0;
    top: 0;

}

.info-inner-more-info {
    font-size: 14px;
    font-weight: 400;
    line-height: 2.1;
    color: #8CC5F9;
    margin-left: 34px;
}

@media (max-width: 1186px) {
    .info {
        margin-left: 0;
    }

    .section-info-title {
        font-size: 25px;
    }

    .container-info {
        gap: 50px;
    }

    .campaign-img {
        width: 50%;
        height: 50%;
    }

    .info-text {
        font-size: 14px;
    }

    .info-list-item {
        font-size: 12px;
    }

    .info-inner-more-info {
        font-size: 12px;
    }
}

@media (max-width: 720px) {
    .container-info {
        flex-direction: column-reverse;
        align-items: center;
        gap: 0;
    }

    .section-info-title {
        font-size: 20px;
    }

    .info-text {
        font-size: 16px;
    }

    .info-list-item {
        font-size: 14px;
    }

    .info-inner-more-info {
        font-size: 14px;
    }

    .info-inner {
        margin-left: 0;
        margin-bottom: 15px;
    }

    .campaign-img {
        width: 75%;
        height: 75%;
    }
}

/* @media (max-width: 630px) {
    .campaign-img {
        width: 75%;
        height: 75%;
    }

    .section-info-title {
        font-size: 20px;
    }
} */
</style>