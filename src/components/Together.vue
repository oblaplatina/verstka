<template>
  <section class="together">
    <div class="together-container">
      <div class="together-inner">
        <h2 class="together-title">{{ $t('home.together.title') }}</h2>
        <p class="together-subtitle">
          {{ $t('home.together.subtitle') }}
        </p>
        <div class="together-world-map">
          <img :alt="$t('home.together.worldMapAlt')" src="@/assets/images/world-map.svg" class="world-map" />
          <div class="svg-point">
            <div v-show="visibleTooltip.brazil" class="tooltip-b">
              {{ $t('home.together.tooltips.brazil') }}
            </div>
            <div v-show="visibleTooltip.china" class="tooltip-c">
              {{ $t('home.together.tooltips.china') }}
            </div>
            <svg viewBox="0 0 1060 539" fill="none" xmlns="http://www.w3.org/2000/svg" class="points-svg">
              <g id="brazil-point" @mouseenter="showTooltip('brazil')" @mouseleave="hideTooltip('brazil')"
                @touchstart="showTooltip('brazil')" @touchend="showTooltip('brazil')">
                <circle cx="333.291" cy="383.34" r="17.434" fill="white" />
                <circle cx="333.291" cy="383.34" r="16.2025" stroke="#8CC5F9" stroke-width="2.46311" />
                <circle cx="333.292" cy="383.34" r="13.1166" fill="white" stroke="#8CC5F9" stroke-width="2.46311" />
                <circle cx="333.291" cy="383.34" r="5.05765" fill="#8CC5F9" stroke="#8CC5F9" stroke-width="2.46311" />
              </g>
              <g id="china-point" @mouseenter="showTooltip('china')" @mouseleave="hideTooltip('china')"
                @touchstart="showTooltip('china')" @touchend="showTooltip('china')">
                <circle cx="782.66" cy="150.66" r="21.6599" fill="white" />
                <circle cx="782.66" cy="150.66" r="20.1298" stroke="#8CC5F9" stroke-width="3.06015" />
                <circle cx="782.66" cy="150.66" r="16.296" fill="white" stroke="#8CC5F9" stroke-width="3.06015" />
                <circle cx="782.659" cy="150.661" r="6.28359" fill="#8CC5F9" stroke="#8CC5F9" stroke-width="3.06015" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="brand-logo">
    <div class="brand-logo-inner">
      <img src="@/assets/images/netflix-logo.svg" alt="" class="netflix-logo" />
      <img src="@/assets/images/reddit-logo.svg" alt="" class="reddit-logo" />
      <img src="@/assets/images/amazon-logo.svg" alt="" class="amazon-logo" />
      <img src="@/assets/images/discord-logo.svg" alt="" class="discord-logo" />
      <img src="@/assets/images/spotify-logo.svg" alt="" class="spotify-logo" />
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const visibleTooltip = reactive({
  brazil: false,
  china: false
})

const showTooltip = (point) => {
  visibleTooltip[point] = true
}

const hideTooltip = (point) => {
  visibleTooltip[point] = false
}
</script>

<style lang="scss" scoped>
.together {
  display: flex;
  text-align: center;
  margin-bottom: 110px;
  width: 100%;
  justify-content: center;

  .together-container {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    .together-inner {
      width: 100%;

      .together-title {
        font-size: 35px;
        font-weight: 500;
        line-height: 1.4;
        color: $color-secondary;
        margin-bottom: 13.5px;
        margin-top: 0;

        @media (max-width: $bp-1186) {
          font-size: 25px;
        }
      }

      .together-subtitle {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.8;
        color: $color-text;
        max-width: 700px;
        margin: 0 auto 155.8px;

        @media (max-width: $bp-1186) {
          font-size: 14px;
          margin-bottom: 80px;
        }
      }

      .together-world-map {
        position: relative;
        display: inline-block;
        width: 100%;
        max-width: 1060px;
        margin: 0 auto 36px;

        .world-map {
          width: 100%;
          height: auto;
          display: block;
        }

        .svg-point {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          .points-svg {
            width: 100%;
            height: auto;
            display: block;
          }
        }

        .tooltip-b,
        .tooltip-c {
          position: absolute;
          background-color: $color-white;
          color: $color-bg-base;
          padding: 2px 54px;
          border-radius: 8px;
          box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.25);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
          z-index: 10;

          &::before {
            content: "";
            border: solid transparent;
            position: absolute;
            top: 90%;
            left: 50%;
            border-top-color: $color-white;
            border-width: 15px;
            margin-left: -15px;
            z-index: 1;
          }
        }

        .tooltip-b {
          left: 31%;
          top: 62%;
          transform: translate(-50%, -50%);
        }

        .tooltip-c {
          left: 74%;
          top: 20%;
          transform: translate(-50%, -50%);
        }

        @media (max-width: $bp-600) {

          .tooltip-b,
          .tooltip-c {
            font-size: 12px;
            padding: 1px 5px;
          }
        }
      }
    }
  }

  @media (max-width: $bp-1195) {
    margin-bottom: 0;
  }
}

.brand-logo {
  margin-bottom: 96px;
  display: flex;
  justify-content: center;
  width: 100%;

  .brand-logo-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 67px;
    max-width: 1135px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    @media (max-width: $bp-1195) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: $bp-600) {
      gap: 25px;

      img {
        width: 25%;
        height: auto;
      }
    }
  }

  @media (max-width: $bp-600) {
    margin-bottom: 55px;
  }
}
</style>