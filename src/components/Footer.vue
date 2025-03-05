<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-brand-logo">
          <router-link to="/" class="footer-logo">
            <img src="@/assets/images/logo.svg" alt="footer logo" />
          </router-link>
          <h3 class="footer-brand-name">{{ $t('common.footer.brandName') }}</h3>
        </div>
        <p class="footer-description">{{ $t('common.footer.description') }}</p>
        <div class="footer-social">
          <a href="#" class="social-link">
            <img src="@/assets/images/Facebook.svg" alt="Facebook" />
          </a>
          <a href="#" class="social-link">
            <img src="@/assets/images/twitter.svg" alt="Twitter" />
          </a>
          <a href="#" class="social-link">
            <img src="@/assets/images/instagram.svg" alt="Instagram" />
          </a>
        </div>
        <p class="footer-copyright">
          {{ $t('common.footer.copyright') }}
        </p>
      </div>
      <div class="footer-links">
        <div v-for="(column, index) in links" :key="index" :class="['footer-column', column.class]">
          <h3 class="footer-title">
            {{ column.title }}
            <span class="dropdown-icon" @click="toggleDropdown(index)" :class="{ open: isOpen[index] }">
              <img :src="langArrow" alt="Dropdown arrow" class="dropdown-arrow" />
            </span>
          </h3>
          <ul class="footer-list" :class="{ 'is-hidden': isMobile && !isOpen[index] }">
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
              <router-link v-if="link.isRouter" :to="link.href" class="footer-link">
                {{ link.text }}
              </router-link>
              <a v-else :href="link.href" class="footer-link" target="_blank">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { defineProps } from 'vue'
import langArrow from '@/assets/images/lang-arrow.svg'

const props = defineProps({
  links: {
    type: Array,
    default: () => []
  }
})

const isMobile = ref(false)
const isOpen = ref([])
let mediaQuery = null

const handleMediaChange = (e) => {
  isMobile.value = e.matches
  isOpen.value = Array(props.links.length).fill(!isMobile.value)
}

const toggleDropdown = (index) => {
  if (isMobile.value) {
    isOpen.value[index] = !isOpen.value[index]
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 830px)')
  isMobile.value = mediaQuery.matches
  isOpen.value = Array(props.links.length).fill(!isMobile.value)
  mediaQuery.addEventListener('change', handleMediaChange)
})

onBeforeUnmount(() => {
  if (mediaQuery) {
    mediaQuery.removeEventListener('change', handleMediaChange)
  }
})
</script>
<style>
.footer {
  background-color: transparent;
  padding: 179px 0 104px;
  position: relative;
  z-index: 1;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  width: 100vw;
  height: 100%;
  background-color: #F8F8F8;
  transform: translateX(-50%);
  z-index: -1;
}

.footer-container {
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-left {
  display: flex;
  flex-direction: column;
}

.footer-brand-logo {
  display: flex;
  align-items: center;
  margin-bottom: 9px;
}

.footer-logo {
  margin-right: 11px;
}

.footer-brand-name {
  font-size: 22px;
  color: #8CC5F9;
  font-family: "Marko One", serif;
  font-weight: 400;
  font-style: normal;
  line-height: 1.5;
  text-transform: uppercase;
}

.footer-description {
  color: #BDBDBD;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  margin-bottom: 29px;
  margin-right: 185px;
  max-width: 390px;
}

.footer-social {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.social-link {
  display: flex;
  align-items: center;
  background-color: #8CC5F9;
  border-radius: 100%;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: #8CC5F9;
  border-radius: 50%;
  box-shadow: 0 13px 18px rgba(17, 19, 35, 0.08);
}

.footer-copyright {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  color: #AFB5C0;
}

.footer-links {
  display: flex;
}

.footer-column-product {
  margin-right: 121px;
}

.footer-column-company {
  margin-right: 105px;
}

.footer-column-privacy {
  margin-right: 68px;
}

.footer-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  color: #0B132A;
  margin-bottom: 20px;
  display: flex;
  cursor: default;
  justify-content: space-between;
  align-items: center;
}

.dropdown-icon {
  transition: transform 0.3s ease;
  display: none;
  cursor: pointer;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list.is-hidden {
  display: none;
}

.footer-link {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: #4F5665;
  padding-bottom: 10px;
  white-space: nowrap;
}

@media (max-width: 1060px) {
  .footer-title {
    font-size: 16px;
  }

  .footer-link {
    font-size: 14px;
  }

  .footer-description {
    font-size: 16px;
    margin-right: 90px;
  }

  .footer-copyright {
    font-size: 14px;
  }

  .footer-column-company {
    margin-right: 50px;
  }

  .footer-column-product {
    margin-right: 50px;
  }

  .footer-column-privacy {
    margin-right: 10px;
  }
}

@media (max-width: 830px) {
  .footer-links {
    display: block;
    width: 40%;
  }

  .footer-title {
    margin-bottom: 10px;
  }

  .footer-list {
    margin-bottom: 20px;
  }

  .footer-title .dropdown-icon {
    display: inline-block;
  }

  .footer-list.is-hidden {
    display: none;
    margin-bottom: 15px;
  }

  .footer-column-company {
    margin-right: 0;
  }

  .footer-column-privacy {
    margin-right: 0;
  }

  .footer-column-product {
    margin-right: 0;
  }
}

@media (max-width: 430px) {
  .footer {
    padding-bottom: 50px;
  }

  .footer-brand-name {
    font-size: 16px;
  }

  .footer-description {
    font-size: 14px;
    margin-left: 0;
    margin-right: 30px;
  }

  .footer-social {
    margin-left: 5px;
  }

  .footer-copyright {
    font-size: 12px;
  }

  .footer-title {
    font-size: 14px;
  }

  .footer-link {
    font-size: 12px;
  }
}
</style>