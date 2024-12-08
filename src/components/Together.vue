<template>
    <section class="together">
      <div class="together-container">
        <div class="together-inner">
          <h2 class="together-title">Better Together</h2>
          <p class="together-subtitle">
            Quas et dolorem quod. Autem et labore dolor ab incidunt nisi. Qui voluptas quia sequi.
            Nihil est ullam omnis voluptas repellat voluptatibus error iure.
          </p>
          <div class="together-world-map">
            <img src="@/assets/images/world-map.svg" alt="world map" class="world-map">
            <div class="svg-point">
              <div v-show="visibleTooltip.brazil" class="tooltip-b">
                Brazil
              </div>
              <div v-show="visibleTooltip.china" class="tooltip-c">
                China
              </div>
              <svg viewBox="0 0 1060 539" fill="none" xmlns="http://www.w3.org/2000/svg" class="points-svg">
                <g id="brazil-point" @mouseenter="showTooltip('brazil')" @mouseleave="hideTooltip('brazil')">
                  <circle cx="333.291" cy="383.34" r="17.434" fill="white" />
                  <circle cx="333.291" cy="383.34" r="16.2025" stroke="#8CC5F9" stroke-width="2.46311" />
                  <circle cx="333.292" cy="383.34" r="13.1166" fill="white" stroke="#8CC5F9" stroke-width="2.46311" />
                  <circle cx="333.291" cy="383.34" r="5.05765" fill="#8CC5F9" stroke="#8CC5F9" stroke-width="2.46311" />
                </g>
                <g id="china-point" @mouseenter="showTooltip('china')" @mouseleave="hideTooltip('china')">
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
        <img src="@/assets/images/netflix-logo.svg" alt="" class="netflix-logo">
        <img src="@/assets/images/reddit-logo.svg" alt="" class="reddit-logo">
        <img src="@/assets/images/amazon-logo.svg" alt="" class="amazon-logo">
        <img src="@/assets/images/discord-logo.svg" alt="" class="discord-logo">
        <img src="@/assets/images/spotify-logo.svg" alt="" class="spotify-logo">
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visibleTooltip: {
          brazil: false,
          china: false,
        },
      };
    },
    methods: {
      showTooltip(point) {
        this.visibleTooltip[point] = true
      },
      hideTooltip(point) {
        this.visibleTooltip[point] = false
      }
    }
  }
  </script>
  
  <style scoped>
  .together {
    display: flex;
    text-align: center;
    margin-bottom: 110px;
    width: 100%;
    justify-content: center;
  }
  
  .together-container {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
  .together-inner {
    width: 100%;
  }
  
  .together-title {
    font-size: 35px;
    font-weight: 500;
    line-height: 1.4;
    color: #0B132A;
    margin-bottom: 13.5px;
    margin-top: 0;
  }
  
  .together-subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.8;
    color: #4F5665;
    max-width: 700px;
    margin: 0 auto 155.8px; 
  }
  
  .together-world-map {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 1060px;
    margin: 0 auto 36px;
  }
  
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
  }
  
  .points-svg {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .tooltip-b {
    position: absolute;
    left: 31%;
    top: 62%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    color: #000000;
    padding: 2px 54px;
    border-radius: 8px;
    box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    z-index: 10;
  }
  
  .tooltip-b::before {
    content: "";
    border: solid transparent;
    position: absolute;
    top: 90%;
    left: 50%;
    border-top-color: #ffffff;
    border-width: 15px;
    margin-left: -15px;
    z-index: 1;
  }
  
  .tooltip-c {
    position: absolute;
    left: 74%;
    top: 20%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    color: #000000;
    padding: 2px 54px;
    border-radius: 8px;
    box-shadow: 4px 4px 15px 0px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    z-index: 10;
  }
  
  .tooltip-c::before {
    content: "";
    border: solid transparent;
    position: absolute;
    top: 90%;
    left: 50%;
    border-top-color: #ffffff;
    border-width: 15px;
    margin-left: -15px;
    z-index: 1;
  }
  
  .brand-logo {
    margin-bottom: 96px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .brand-logo-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 67px;
    max-width: 1135px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  
  @media (max-width: 1186px) {
    .together-title {
        font-size: 25px;
    }

    .together-subtitle {
        font-size: 14px;
        margin-bottom: 80px;
    }
  }

  @media (max-width: 1195px) {
    .brand-logo-inner {
      flex-wrap: wrap;
      justify-content: center;
    }

    .together {
        margin-bottom: 0;
    }
  }
  
  @media (max-width: 600px) {
    .together-subtitle {
      margin-bottom: 80px;
    }
    .tooltip-b, .tooltip-c {
      font-size: 12px;
      padding: 1px 5px;
    }

    .brand-logo {
        margin-bottom: 55px;
    }

    .brand-logo-inner {
        gap: 25px;
    }

    .brand-logo-inner img {
        width: 25%;
        height: auto;
    }
  }
  </style>
  