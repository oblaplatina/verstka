<template>
    <div class="main-content">
      <section class="main-top">
        <div class="text-container">
          <h1 class="main-title" :class="{ 'main-title-es': $i18n.locale === 'es' }">{{ $t('home.main.title') }}</h1>
          <div class="main-subtitle">
            <p v-for="(line, index) in subtitleLines" :key="index">{{ $t('home.main.subtitle.' + index) }}</p>
          </div>
          <div class="button-shadow">
            <a href="#" class="contact-btn">{{ $t('home.main.button') }}</a>
          </div>
        </div>
        <img src="@/assets/images/network.svg" alt="Network Image" class="network-img">
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Main',
    computed: {
      subtitleLines() {
        const line = this.$i18n.messages[this.$i18n.locale].home.main.subtitle
            return line || []
      }
    }
  }
  </script>


<style>
.main-content {
    margin-bottom: 157.55px;
}

.main-top {
    display: flex;
    justify-content: space-between;
    margin-left: 71px;
}

.main-title {
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.4;
    color: #8CC5F9;
}

.main-title-es { 
    font-size: 44px;
}

.main-subtitle {
    font-size: 22px;
    font-weight: 400;
    line-height: 1.37;
    color: #4F5665;
    margin-bottom: 87px;
}

.button-shadow {
    position: relative;
    display: inline-block;
}

.contact-btn {
    display: inline-block;
    background-color: #8CC5F9;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.4;
    padding: 17px 80px;
    border-radius: 10px;
    text-align: center;
    z-index: 1;
}

.contact-btn:hover {
    background-color: #878ABC;
}

.contact-btn::before {
    content: "";
    position: absolute;
    height: 100%;
    top: 25.3px;
    left: 19.09px;
    right: 19.09px;
    bottom: -25.3px;
    background-color: #5F7A7E;
    opacity: 0.22;
    border-radius: 10px;
    filter: blur(22px);
    z-index: -1;
}

.network-img {
    display: flex;
    margin-right: -18px;

}

@media (max-width: 1250px) {
    .main-title {
        font-size: 35px;
    }

    .main-subtitle {
        font-size: 18px;
        margin-bottom: 50px;
    }

    .main-top {
        align-items: center;
        gap: 15px;
    }

    .network-img {
        width: 50%;
        height: auto;
        margin-right: 30px;

    }
}

@media (max-width: 1040px) {
    .network-img {
        width: 40%;
        margin-left: auto;
    }

    .main-title {
        font-size: 30px;
    }

    .main-subtitle {
        font-size: 16px;
        margin-bottom: 35px;
    }

    .contact-btn {
        font-size: 14px;
        padding: 11px 50px;
    }
}

@media (max-width: 840px) {
    .main-top {
        flex-direction: column;
        margin-left: 0;
    }

    .main-content {
        margin-bottom: 85px;
    }

    .network-img {
        width: 100%;
        margin: 0 auto;
        margin-top: 50px;
    }

    .main-title {
        font-size: 50px;
    }

    .main-subtitle {
        font-size: 22px;
        margin-bottom: 35px;
    }

    .contact-btn {
        font-size: 16px;
        padding: 17px 80px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 670px) {
    .network-img {
        width: 80%;
    }

    .main-title {
        font-size: 23px;
        margin-bottom: 15px;
    }

    .main-subtitle {
        font-size: 16px;
    }

}
</style>