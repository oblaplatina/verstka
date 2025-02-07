<template>
  <main class="main-content">
    <section class="about-us-container">
      <div class="about-us-inner">
        <h1 class="about-us-title">{{ $t('about.aboutMain.title') }}</h1>
        <div class="about-us-subtitle">
          <p v-for="(line, index) in subtitleLines" :key="index" v-html="line"></p>
        </div>
      </div>
      <img src="@/assets/images/crossed_flags.svg" alt="Crossed Flags" class="crossed-flags-img" />
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, messages } = useI18n()

const subtitleLines = computed(() => {
  const subtitles = messages.value[locale.value].about.aboutMain.subtitle
  return subtitles || []
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.main-content {
  .about-us-container {
    display: flex;
    justify-content: space-between;
    margin-left: 71px;
    margin-bottom: 157px;

    .crossed-flags-img {
      margin-left: 135px;
    }

    @media (max-width: 1250px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .about-us-title {
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.4;
    color: $color-primary;
    margin-bottom: 8px;

    @media (max-width: 1250px) {
      font-size: 35px;
    }
  }

  .about-us-subtitle {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.37;
    color: $color-text;
    margin-bottom: 87px;

    p {
      margin-bottom: 35px;
    }

    .highlight {
      color: $color-primary;
      font-weight: bold;
    }

    @media (max-width: 1250px) {
      font-size: 18px;
      margin-bottom: 25px;

      p {
        margin-bottom: 20px;
      }
    }
  }

  .crossed-flags-img {
    @media (max-width: 1250px) {
      width: 50%;
      height: auto;
      margin-left: 0;
    }
  }
}
</style>