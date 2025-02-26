<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <router-link :to="ROUTES.HOME" class="logo">
                    <img src="@/assets/images/logo.svg" alt="Logo" />
                </router-link>
                <h3 class="brand-name">{{ $t('common.header.brandName') }}</h3>
                <nav class="menu">
                    <ul class="menu-list">
                        <li v-for="(item, index) in menuItems" :key="index" :class="{ active: isActive(item.path) }"
                            class="menu-link">
                            <router-link :to="ROUTES[item.path]">
                                {{ $t(`common.header.menuItems.${item.label}`) }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <div class="menu-lang" @mouseenter="showDropdown" @mouseleave="hideDropdown">
                    <div class="lang-select">
                        <a href="#" class="flag-icon">
                            {{ selectedLang.code }}
                            <img :src="selectedLang.flag" :alt="selectedLang.code" />
                        </a>
                        <img :src="langArrow" alt="" class="arrow-icon" />
                    </div>
                    <div class="lang-dropdown" v-if="isDropdownOpen">
                        <a href="#" v-for="lang in otherLanguages" :key="lang.code" class="lang-option"
                            @click.prevent="selectLanguage(lang)">
                            {{ lang.code }}
                            <img :src="lang.flag" :alt="lang.code" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { ROUTES } from '@/router/routes'
import flagEn from '@/assets/images/flag-en.svg'
import flagEs from '@/assets/images/flag-es.svg'
import flagDe from '@/assets/images/flag-de.svg'
import langArrow from '@/assets/images/lang-arrow.svg'

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const menuItems = [
    { label: 'about', path: 'ABOUT' },
    { label: 'products', path: 'HOME' },
    { label: 'work', path: 'HOME' },
    { label: 'blog', path: 'HOME' },
    { label: 'contact', path: 'HOME' }
]

const languages = [
    { code: 'En', flag: flagEn },
    { code: 'Es', flag: flagEs },
    { code: 'De', flag: flagDe }
]

const findCurrentLang = (currentLangCode) => {
    return languages.find(lang => lang.code.toLowerCase() === currentLangCode)
}

const selectedLang = ref(findCurrentLang(locale.value) || { code: 'En', flag: flagEn })
const isDropdownOpen = ref(false)

const otherLanguages = computed(() => {
    return languages.filter(lang => lang.code !== selectedLang.value.code)
})

const isActive = (path) => {
    return route.path === path
}

const showDropdown = () => {
    isDropdownOpen.value = true
}

const hideDropdown = () => {
    isDropdownOpen.value = false
}

const selectLanguage = (lang) => {
    selectedLang.value = lang
    isDropdownOpen.value = false
    locale.value = lang.code.toLowerCase()
    localStorage.setItem('locale', lang.code.toLowerCase())
}

watch(locale, (newLocale) => {
    const current = languages.find(lang => lang.code.toLowerCase() === newLocale)
    if (current) {
        selectedLang.value = current
    }
}, { immediate: true })

onMounted(() => {
    const current = languages.find(lang => lang.code.toLowerCase() === locale.value)
    if (current) {
        selectedLang.value = current
    }
})
</script>
<style>
.header-inner {
    display: flex;
    justify-content: space-between;
    margin-bottom: 85px;
}

.logo {
    margin-top: 83px;
}

.brand-name {
    margin-top: 81px;
    font-size: 22px;
    color: #8CC5F9;
    font-family: "Marko One", serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.1;
    text-transform: uppercase;
    margin-right: auto;
    margin-left: 11px;
}

.menu-list {
    display: flex;
    margin-top: 88.62px;
    gap: 0 43px;
    font-size: 16px;
    color: #08090A;
    margin-right: 255px;
    margin-left: 159px;
}

.menu-link:hover {
    color: #8CC5F9;
}

.menu-link a {
    position: relative;
    text-decoration: none;
}

.menu-link.active a {
    color: #8CC5F9;
}

.menu-link.active a::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #8CC5F9;
}

.menu-lang {
    display: inline-block;
    margin-top: 79px;
    line-height: 1.9;
    font-size: 16px;
    color: #4F4F4F;
}

.lang-select {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.flag-icon {
    display: flex;
    gap: 7px;
}

.arrow-icon {
    margin-left: 5px;
}

.lang-dropdown {
    display: none;
    position: absolute;
    margin-top: 5px;
    background-color: #FFFFFF;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    align-items: center;
}

.lang-dropdown a {
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    line-height: 1.2;
}

.lang-option {
    display: flex;
    margin: 15px 15px;
    justify-content: space-between
}

.lang-option {
    display: flex;
    gap: 5px;
}

.menu-lang:hover .lang-dropdown {
    display: block;
}

@media (max-width: 1235px) {
    .menu-list {
        margin-left: auto;
        margin-right: 0;
    }

    .header-inner {
        margin-bottom: 50px;
    }

    .menu-lang {
        margin-left: auto;
    }
}

@media (max-width: 900px) {
    .menu-list {
        flex-direction: column;
        gap: 10px;
    }

}

@media (max-width: 430px) {
    .menu-lang {
        margin-left: 15px;
        font-size: 12px
    }

    .menu-lang img {
        width: 15px;
    }

    .arrow-icon {
        width: 10px;
    }

    /* .lang-select {
        font-size: 12px;
    }

    .lang-dropdown {
        font-size: 12px;
    } */

    .logo img {
        width: 35px;
    }

    .brand-name {
        margin-left: 0;
        font-size: 16px;
        margin-right: 20px;
    }

    .menu-list {
        font-size: 12px;
    }

    .header-inner {
        justify-content: flex-start;
    }
}
</style>