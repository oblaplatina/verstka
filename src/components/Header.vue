<template>
    <div class="header">
        <div class="container">
            <div class="header-inner">
                <router-link to="/" class="logo">
                    <img src="@/assets/images/logo.svg" alt="">
                </router-link>
                <h3 class="brand-name">YOUR BRAND</h3>
                <nav class="menu">
                    <ul class="menu-list">
                        <li v-for="(item, index) in menuItems" :key="index" :class="{ active: isActive(item.path) }"
                            class="menu-link">
                            <router-link :to="item.path">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="menu-lang">
                    <div class="lang-select">
                        <a href="#" class="flag-icon">En
                            <img src="@/assets/images/flag-en.svg" alt="English language">
                        </a>
                        <img src="@/assets/images/lang-arrow.svg" alt="" class="arrow-icon">
                    </div>
                    <div class="lang-dropdown">
                        <a href="#" class="lang-option">Es
                            <img src="@/assets/images/flag-es.svg" alt="">
                        </a>
                        <a href="#" class="lang-option">De
                            <img src="@/assets/images/flag-de.svg" alt="">
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
        return {
            menuItems: [
                { label: "About us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "How we work", path: "/work" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
            ],
        };
    },
    methods: {
        isActive(path) {
            return this.$route.path === path;
        },
    },
}
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
    line-height: 1.0.5;
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
    .menu-list{
        margin-left: auto;
        margin-right: 0;
    }

    .header-inner{
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

    .arrow-icon{
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