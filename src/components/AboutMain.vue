<template>
  <main class="main-content">
    <section class="about-us-container">
      <div class="about-us-inner">
        <!-- Локализованный заголовок -->
        <h1 class="about-us-title">{{ $t('about.aboutMain.title') }}</h1>

        <!-- Вывод массива строк напрямую -->
        <div class="about-us-subtitle">
          <p class="subtitle-line" v-for="(line, index) in subtitleLines" :key="index" v-html="line">
          </p>
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
.main-content {
  .about-us-container {
    display: flex;
    justify-content: space-between;
    margin-left: 71px;
    margin-bottom: 157px;

    .crossed-flags-img {
      margin-left: 135px;

      @media (max-width: $bp-1250) {
        width: 50%;
        height: auto;
        margin-left: 0;
      }
    }

    @media (max-width: $bp-1250) {
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

    @media (max-width: $bp-1250) {
      font-size: 35px;
    }
  }

  .about-us-subtitle {
    margin-bottom: 87px;

    @media (max-width: $bp-1250) {
      margin-bottom: 25px;
    }
  }

  .subtitle-line {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.37;
    color: $color-text;
    margin-bottom: 35px;

    @media (max-width: $bp-1250) {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  .highlight {
    color: $color-primary;
    font-weight: bold;
  }
}
</style>