<template>
    <main class="main-content">
      <section class="about-us-container">
        <div class="about-us-inner">
          <!-- Локализованный заголовок -->
          <h1 class="about-us-title">{{ $t('about.aboutMain.title') }}</h1>
  
          <!-- Вывод массива строк напрямую -->
          <div class="about-us-subtitle">
            <p v-for="(line, index) in subtitleLines" :key="index" v-html="line">
            </p>
          </div>
        </div>
        <img
          src="@/assets/images/crossed_flags.svg"
          alt="Crossed Flags"
          class="crossed-flags-img"
        >
      </section>
    </main>
  </template>
  
  <script>
  export default {
    name: 'AboutUs',
    computed: {
      subtitleLines() {
        const subtitles = this.$i18n.messages[this.$i18n.locale].about.aboutMain.subtitle;
        return subtitles || [];
      },
    },
  };
  </script>
<style>
    .about-us-container {
    display: flex;
    justify-content: space-between;
    margin-left: 71px;
    margin-bottom: 157px;
}

.about-us-title {
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.4;
    color: #8CC5F9;
    margin-bottom: 8px;
}

.about-us-subtitle {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.37;
    color: #4F5665;
    margin-bottom: 87px;
}

.about-us-subtitle p {
    margin-bottom: 35px;
}

.about-us-subtitle .highlight {
    color: #8CC5F9;
    font-weight: bold;
}

.crossed-flags-img {
    margin-left: 135px;
}

@media (max-width: 1250px) {
    .about-us-title {
        font-size: 35px;
    }

    .about-us-subtitle {
        font-size: 18px;
    }

    .about-us-subtitle p {
        margin-bottom: 20px;
    }

    .crossed-flags-img {
        width: 50%;
        height: auto;
    }
}

@media (max-width: 1250px) {
    .about-us-container {
        flex-wrap: wrap;
        justify-content: center;
    }

    .about-us-subtitle {
        margin-bottom: 25px;
    }
    
    .crossed-flags-img {
        width: 50%;
        margin-left: 0;
    }
}
</style>