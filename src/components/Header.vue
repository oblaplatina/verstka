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
                        <button class="flag-icon">
                            {{ selectedLang.code }}
                            <img :src="selectedLang.flag" :alt="selectedLang.code" />
                        </button>
                        <img :src="langArrow" alt="" class="arrow-icon" />
                    </div>
                    <div class="lang-dropdown" v-if="isDropdownOpen">
                        <button href="#" v-for="lang in otherLanguages" :key="lang.code" class="lang-option"
                            @click.prevent="selectLanguage(lang)">
                            {{ lang.code }}
                            <img :src="lang.flag" :alt="lang.code" />
                        </button>
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
    const storedLocale = localStorage.getItem('locale')
    const langCode = storedLocale ? storedLocale : currentLangCode
    const found = languages.find(lang => lang.code.toLowerCase() === langCode)
    return found ? found : { code: 'En', flag: flagEn }
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

<style lang="scss" scoped>
.header {
    .header-inner {
        display: flex;
        justify-content: space-between;
        margin-bottom: 85px;

        @media (max-width: $bp-1235) {
            margin-bottom: 50px;
        }

        @media (max-width: $bp-430) {
            justify-content: flex-start;
        }
    }

    .logo {
        margin-top: 83px;

        @media (max-width: $bp-430) {
            img {
                width: 35px;
            }
        }
    }

    .brand-name {
        margin-top: 81px;
        font-size: 22px;
        color: $color-primary;
        font-family: "Marko One", serif;
        font-weight: 400;
        line-height: 1.1;
        text-transform: uppercase;
        margin-right: auto;
        margin-left: 11px;

        @media (max-width: $bp-430) {
            margin-left: 0;
            font-size: 16px;
            margin-right: 20px;
        }
    }

    .menu {
        .menu-list {
            display: flex;
            margin-top: 88.62px;
            gap: 0 43px;
            font-size: 16px;
            color: $color-bg-base;
            margin-right: 255px;
            margin-left: 159px;

            @media (max-width: $bp-1235) {
                margin-left: auto;
                margin-right: 0;
            }

            @media (max-width: $bp-900) {
                flex-direction: column;
                gap: 10px;
            }

            @media (max-width: $bp-430) {
                font-size: 12px;
            }

            .menu-link {
                &:hover {
                    color: $color-primary;
                }

                a {
                    position: relative;
                    text-decoration: none;
                }

                &.active a {
                    color: $color-primary;

                    &::after {
                        content: "";
                        position: absolute;
                        bottom: -6px;
                        left: 0;
                        width: 100%;
                        height: 4px;
                        background-color: $color-primary;
                    }
                }
            }
        }
    }

    .menu-lang {
        display: inline-block;
        margin-top: 79px;
        line-height: 1.9;
        font-size: 16px;
        color: $color-text;

        .lang-select {
            cursor: pointer;
            display: flex;
            align-items: center;

            .flag-icon {
                display: flex;
                gap: 7px;
            }

            .arrow-icon {
                margin-left: 5px;
            }
        }

        .lang-dropdown {
            display: none;
            position: absolute;
            margin-top: 5px;
            background-color: $color-white;
            box-shadow: 4px 4px 16px $color-shadow;
            border-radius: $radius-base;
            align-items: center;

            button {
                color: $color-secondary;
                text-decoration: none;
                display: flex;
                align-items: center;
                line-height: 1.2;
            }

            .lang-option {
                display: flex;
                margin: 15px;
                justify-content: space-between;
                gap: 5px;
            }
        }

        &:hover .lang-dropdown {
            display: block;
        }

        @media (max-width: $bp-1235) {
            margin-left: auto;
        }

        @media (max-width: $bp-430) {
            margin-left: 15px;
            font-size: 12px;

            img {
                width: 15px;
            }

            .arrow-icon {
                width: 10px;
            }
        }
    }
}
</style>