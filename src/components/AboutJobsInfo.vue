<template>
    <section class="jobs-info">
        <div class="jobs-info-container">
            <img src="@/assets/images/online_research.svg" alt="" class="jobs-info-img" />
            <div class="jobs-info-inner">
                <h2 class="jobs-info-title">{{ $t('about.jobsInfo.title') }}</h2>
                <div class="jobs-info-subtitle">
                    <p>{{ $t('about.jobsInfo.subtitle') }}</p>
                </div>
            </div>
            <AppButton :text="$t('about.jobsInfo.button')" />
        </div>
    </section>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue'
</script>
<style>
.jobs-info {
    margin-bottom: -100px;
    z-index: 2;
    position: relative;
}

.jobs-info-container {
    display: flex;
    position: relative;
    background-color: white;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(13, 16, 37, 0.1) 5px 5px 5px -5px;
    border-radius: 10px;
    max-width: 1140px;
}

.jobs-info-container::before {
    content: "";
    position: absolute;
    top: 16px;
    left: 31px;
    right: 31px;
    bottom: -33px;
    background-color: rgba(13, 16, 37, 1);
    filter: blur(50px);
    border-radius: 10px;
    z-index: -1;
    opacity: 0.1;
    pointer-events: none;
}

.jobs-info-inner {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.jobs-info-title {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.3;
    color: #0B132A;
    margin-bottom: 20px;
    margin-top: 47px;
    margin-right: 148px;
}

.jobs-info-subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #4F5665;
    margin-bottom: 47px;
    margin-right: 148px;
}

.jobs-info-img {
    margin-left: 46px;
    margin-right: 44px;
}

@media (max-width: 1186px) {
    .jobs-info-inner {
        flex: -1;
    }

    .jobs-info-title {
        font-size: 25px;
        margin-right: 0;
        max-width: 400px;
    }

    .jobs-info-subtitle {
        font-size: 14px;
        margin-right: 30px;
    }
}

@media (max-width: 900px) {
    .jobs-info-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .jobs-info-img {
        flex: 0 0 auto;
        margin-right: 20px;
        margin-left: 0;
    }

    .jobs-info-inner {
        flex: 0 0 auto;
        text-align: left;
        max-width: 250px;
    }

    .jobs-info-title {
        font-size: 20px;

    }

    .jobs-info-subtitle {
        font-size: 12px;
        margin-bottom: 25px;
    }
}

@media (max-width: 438px) {
    .jobs-info-inner {
        text-align: center;
    }

    .jobs-info-title {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .jobs-info-img {
        margin-top: 20px;
    }
}
</style>