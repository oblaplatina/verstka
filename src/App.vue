<template>
  
  <router-view/>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function updateHtmlClass(currentLocale) {
  console.log('updateHtmlClass called with locale:', currentLocale)
  document.documentElement.classList.remove('locale-de', 'locale-es')
  
  if (currentLocale === 'de') {
    document.documentElement.classList.add('locale-de')
  } else if (currentLocale === 'es') {
    document.documentElement.classList.add('locale-es')
  }
}

onMounted(() => {
  console.log('onMounted locale:', locale.value)
  updateHtmlClass(locale.value)
})

watch(locale, (newVal) => {
  console.log('Locale changed:', newVal)
  updateHtmlClass(newVal)
})
</script>

<style>
html {
  box-sizing: border-box;
  overflow-x: hidden;
}

*, *::after, *::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

#app {
  font-family: "Rubik", serif;
  max-width: 1227.5px;
  padding: 0 10px;
  margin: 0 auto;
}

:root {
  font-size: 1rem;
}

:root.locale-de, :root.locale-es {
  font-size: 0.8rem;
  word-wrap: break-word;
}
</style>
