<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <router-link to="/" class="logo">
                    <img src="@/assets/images/logo.svg" alt="Logo" />
                </router-link>

                <h3 class="brand-name">{{ $t('common.header.brandName') }}</h3>
                <nav class="menu">
                    <ul class="menu-list">
                        <li v-for="(item, index) in menuItems" :key="index" :class="{ active: isActive(item.path) }"
                            class="menu-link">
                            <router-link :to="item.path">
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
                        <img src="@/assets/images/lang-arrow.svg" alt="" class="arrow-icon" />
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

<script>
export default {
    name: 'Header',
    data() {
        const currentLangCode = this.$i18n.locale;
        const currentLang = this.languages?.find(lang => lang.code.toLowerCase() === currentLangCode) || null;

        return {
            menuItems: [
                { label: 'about', path: '/about' },
                { label: 'products', path: '/products' },
                { label: 'work', path: '/work' },
                { label: 'blog', path: '/blog' },
                { label: 'contact', path: '/contact' },
            ],
            languages: [
                { code: 'En', flag: require('@/assets/images/flag-en.svg') },
                { code: 'Es', flag: require('@/assets/images/flag-es.svg') },
                { code: 'De', flag: require('@/assets/images/flag-de.svg') },
            ],
            selectedLang: currentLang || { code: 'En', flag: require('@/assets/images/flag-en.svg') },
            isDropdownOpen: false,
        };
    },
    computed: {
        otherLanguages() {
            return this.languages.filter(lang => lang.code !== this.selectedLang.code);
        },
    },
    watch: {
        '$i18n.locale': {
            immediate: true,
            handler(newLocale) {
                const currentLang = this.languages.find(lang => lang.code.toLowerCase() === newLocale);
                if (currentLang) {
                    this.selectedLang = currentLang;
                }
            },
        },
    },
    methods: {
        isActive(path) {
            return this.$route.path === path;
        },
        showDropdown() {
            this.isDropdownOpen = true;
        },
        hideDropdown() {
            this.isDropdownOpen = false;
        },
        selectLanguage(lang) {
            this.selectedLang = lang;
            this.isDropdownOpen = false;
            this.$i18n.locale = lang.code.toLowerCase();
            localStorage.setItem('locale', lang.code.toLowerCase());
        },
    },
    mounted() {
        const currentLangCode = this.$i18n.locale;
        const currentLang = this.languages.find(lang => lang.code.toLowerCase() === currentLangCode);
        if (currentLang) {
            this.selectedLang = currentLang;
        }
    },
};
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

            a {
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