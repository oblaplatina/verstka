<template>
    <section class="team-container">
        <!-- Заголовок: about.team.title -->
        <h2 class="team-title">
            {{ $t('about.team.title') }}
        </h2>

        <div class="team-inner">
            <!-- Навигация по вкладкам (about.team.tabs) -->
            <div class="team-nav">
                <nav class="team-nav-title">
                    <ul class="team-nav-list">
                        <li v-for="tab in tabsFromI18n" :key="tab"
                            :class="['team-nav-item', { active: activeTab === tab }]" @click="selectTeam(tab)">
                            {{ tab }}
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- Карточки текущей вкладки -->
            <div :id="'team-cards-' + activeTab.toLowerCase()" class="team-cards">
                <div v-for="member in visibleMembers" :key="member.id" class="profile-card">
                    <!-- FRONT -->
                    <div class="profile-card-content profile-card-front">
                        <img :src="member.image" alt="" class="profile-card-ava" />
                        <h3 class="profile-card-title">{{ member.name }}</h3>
                        <!-- Должность берем из i18n -->
                        <p class="profile-card-subtitle">
                            {{ memberField(member.slug, 'title') }}
                        </p>
                        <p class="profile-card-view" @click="openModal(member)">
                            {{ $t('about.team.modal.viewProfile') }}
                        </p>
                    </div>

                    <!-- BACK -->
                    <div v-if="member.backImage" class="profile-card-content profile-card-back">
                        <img :src="member.backImage" alt="" class="profile-card-ava-back" />
                        <h3 class="profile-card-title-back">{{ member.name }}</h3>
                        <p class="profile-card-view-back" @click="openModal(member)">
                            {{ $t('about.team.modal.viewProfile') }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Кнопка "Load more" -->
            <p v-if="hasMoreMembers" id="load-more-btn" class="load-more" @click="loadMoreCards">
                {{ $t('about.team.buttons.loadMore') }}
            </p>

            <!-- Модальное окно -->
            <div v-if="modalVisible" id="profile-modal" class="modal" @click.self="closeModal">
                <div class="modal-content">
                    <div class="modal-close">
                        <img src="@/assets/images/close-icon-modal.svg" :alt="$t('about.team.modal.close')"
                            class="close-btn" @click="closeModal" />
                    </div>
                    <div class="modal-body">
                        <div class="modal-image">
                            <!-- Если есть fullImage, берём её, иначе обычную -->
                            <img :src="selectedMember.fullImage || selectedMember.image" loading="lazy"
                                alt="Profile Image" />
                        </div>
                        <div class="modal-info">
                            <h3 class="modal-title">{{ selectedMember.name }}</h3>

                            <!-- description1 -->
                            <p v-if="memberField(selectedMember.slug, 'description1')" class="modal-description">
                                {{ memberField(selectedMember.slug, 'description1') }}
                            </p>

                            <!-- description2 -->
                            <p v-if="memberField(selectedMember.slug, 'description2')" class="modal-description">
                                {{ memberField(selectedMember.slug, 'description2') }}
                            </p>

                            <!-- Соцсети -->
                            <div class="modal-socials">
                                <a v-for="(url, platform) in selectedMember.social" :key="platform" :href="url"
                                    target="_blank" class="social-icon">
                                    <img :src="socialIcons[platform]" :alt="platform" />
                                </a>
                            </div>

                            <!-- Цитата -->
                            <blockquote v-if="memberField(selectedMember.slug, 'quote')" class="modal-quote">
                                {{ memberField(selectedMember.slug, 'quote') }}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import vickyRuss from '@/assets/images/vicky-russ.jpg'
import rotMitt from '@/assets/images/rot-mitt.jpg'
import rotMittBack from '@/assets/images/rot-mitt-back.jpg'
import rotMittFull from '@/assets/images/rot-mitt-full-size.webp'
import lauraHanz from '@/assets/images/laura-hanz.jpg'
import lauraHanzBack from '@/assets/images/laura-hanz-back.jpg'
import elenaWood from '@/assets/images/elena-wood.jpg'
import amanNais from '@/assets/images/aman-nais.jpg'
import franciscaLemon from '@/assets/images/francisca-lemon.jpg'
import reineTais from '@/assets/images/reine-tais.jpg'
import olgurMonz from '@/assets/images/olgur-monz.jpg'
import mediumIcon from '@/assets/images/medium-modal-icon.svg'
import instagramIcon from '@/assets/images/instagram-modal-icon.svg'
import linkedinIcon from '@/assets/images/linkedin-modal-icon.svg'

const { t } = useI18n()
const { locale, messages } = useI18n()

const activeTab = ref('Management')
const modalVisible = ref(false)
const selectedMember = ref(null)
const currentPage = ref(1)
const membersPerPage = 8

const teamMembers = {
    Management: [
        {
            id: 1,
            name: "Vicky Russ",
            slug: "vicky-russ",
            image: vickyRuss,
            backImage: null,
            fullImage: null,
            social: {
                medium: "https://medium.com/vicky-russ",
                instagram: "https://instagram.com/vicky.russ",
                linkedin: "https://linkedin.com/in/vicky-russ"
            }
        },
        {
            id: 2,
            name: "Rot Mitt",
            slug: "rot-mitt",
            image: rotMitt,
            backImage: rotMittBack,
            fullImage: rotMittFull,
            social: {
                medium: "https://medium.com/vicky-russ",
                instagram: "https://instagram.com/vicky.russ",
                linkedin: "https://linkedin.com/in/vicky-russ"
            }
        },
        {
            id: 3,
            name: "Laura Hanz",
            slug: "laura-hanz",
            image: lauraHanz,
            backImage: lauraHanzBack,
            fullImage: null
        },
        {
            id: 4,
            name: "Elena Wood",
            slug: "elena-wood",
            image: elenaWood,
            backImage: null,
            fullImage: null
        },
        {
            id: 5,
            name: "Aman Nais",
            slug: "aman-nais",
            image: amanNais
        },
        {
            id: 6,
            name: "Francisca Lemon",
            slug: "francisca-lemon",
            image: franciscaLemon
        },
        {
            id: 7,
            name: "Reine Tais",
            slug: "reine-tais",
            image: reineTais
        },
        {
            id: 8,
            name: "Olgur Monz",
            slug: "olgur-monz",
            image: olgurMonz
        }
    ],
    Product: [],
    Marketing: [],
    Design: [],
    Development: []
}

const socialIcons = {
    medium: mediumIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon
}

const tabsFromI18n = computed(() => {
    const tabs = t('about.team.tabs')
    return Array.isArray(tabs) ? tabs : []
})

const visibleMembers = computed(() => {
    const currentArray = teamMembers[activeTab.value] || []
    return currentArray.slice(0, membersPerPage * currentPage.value)
})

const hasMoreMembers = computed(() => {
    const total = (teamMembers[activeTab.value] || []).length
    return visibleMembers.value.length < total
})

const selectTeam = (tab) => {
    activeTab.value = tab
    currentPage.value = 1
}

const loadMoreCards = () => {
    currentPage.value++
}

const openModal = (member) => {
    selectedMember.value = member
    modalVisible.value = true
}

const closeModal = () => {
    modalVisible.value = false
    selectedMember.value = null
}

const memberField = (slug, field) => {
    const key = `about.team.members.${slug}.${field}`
    const val = t(key)
    return (val === key) ? null : val
}
</script>

<style scoped>
.team-container {
    margin-bottom: 102px;
}

.team-title {
    text-align: center;
    margin-bottom: 58px;
    font-size: 35px;
    font-weight: 500;
    line-height: 1.4;
    color: #0b132a;
}

.team-nav-title {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 81px;
}

.team-nav-list {
    display: flex;
    gap: 0 43px;
}

.team-nav-item {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    color: #4f4f4f;
    position: relative;
    cursor: pointer;
}

.team-nav-item.active {
    color: #8cc5f9;
}

.team-nav-item.active::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #8cc5f9;
}

.team-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 58px;
    justify-content: center;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
}

.profile-card {
    border: 1px solid #8cc5f9;
    border-radius: 8px;
    text-align: center;
    width: 261px;
    height: 309px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: transform 0.3s ease;
}

.profile-card-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
}

.profile-card-title-back {
    position: absolute;
    bottom: 51px;
    left: 0;
    width: 100%;
    font-size: 22px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    color: #f5fafe;
}

.profile-card-view-back {
    position: absolute;
    bottom: 24px;
    left: 0;
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    text-align: center;
    color: #bdbdbd;
    cursor: pointer;
}

.profile-card-front {
    z-index: 2;
}

.profile-card-back {
    opacity: 0;
    z-index: 1;
}

.profile-card:hover .profile-card-front {
    opacity: 0;
}

.profile-card:hover .profile-card-back {
    opacity: 1;
}

.profile-card-ava {
    border-radius: 50%;
    margin-top: 26px;
    margin-bottom: 19px;
}

.profile-card-title {
    font-size: 22px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
    color: #8cc5f9;
    margin-bottom: 12px;
}

.profile-card-subtitle {
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    line-height: 1.2;
    color: #bdbdbd;
    margin-bottom: 32px;
    overflow-wrap: break-word;
    margin-left: 29px;
    margin-right: 30px;
}

.profile-card-view {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.2;
    color: #bdbdbd;
    margin-bottom: 24px;
    margin-left: 73px;
    margin-right: 73px;
    cursor: pointer;
}

.load-more {
    font-size: 22px;
    font-weight: 400;
    line-height: 2.2;
    text-align: center;
    color: #828282;
}

.modal {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 50px;
    border-radius: 44px;
    border: 4px solid #8cc5f9;
    display: flex;
    flex-direction: column;
    max-width: 70vw;
    width: 100%;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}

.modal-body {
    display: flex;
    flex-direction: row;
    gap: 58px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.modal-image img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    flex-shrink: 0;
}

.modal-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 100px;
}

.modal-title {
    font-size: 44px;
    font-style: italic;
    font-weight: 700;
    text-align: left;
    color: #8cc5f9;
    margin-bottom: 24px;
}

.modal-description {
    font-size: 32px;
    font-weight: 400;
    text-align: left;
    color: #000000;
    margin-bottom: 75px;
}

.modal-socials {
    display: flex;
    gap: 12px;
    margin-top: 21px;
}

.social-icon img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-bottom: 60px;
}

.modal-quote {
    font-size: 32px;
    font-style: italic;
    font-weight: 300;
    line-height: 37.92px;
    text-align: left;
    color: #878abc;
}

@media (max-width: 1658px) {
    .modal-title {
        font-size: 35px;
    }

    .modal-description {
        font-size: 25px;
        margin-bottom: 35px;
    }

    .modal-socials {
        margin-top: 0;
    }

    .modal-socials img {
        margin-bottom: 30px;
    }

    .modal-quote {
        font-size: 25px;
        line-height: 1.2;
    }

    .modal-image {
        width: 40%;
    }

    .modal-info {
        margin-right: 50px;
    }

    .close-btn {
        width: 70%;
    }
}

@media (max-width: 1100px) {
    .modal-body {
        flex-direction: column;
        align-items: center;
    }

    .modal-image {
        width: 60%;
    }
}

@media (max-width: 660px) {
    .modal-body {
        gap: 10px;
    }

    .team-title {
        font-size: 25px;
    }

    .modal-body {
        align-items: flex-start;
    }

    .modal-image {
        width: 100%;
    }

    .team-nav-list {
        gap: 15px 25px;
        flex-wrap: wrap;
    }

    .modal-title {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .modal-description {
        font-size: 14px;
        margin-bottom: 15px;
    }

    .modal-socials img {
        margin-bottom: 15px;
        width: 80%;
        height: auto;
    }

    .modal-quote {
        font-size: 14px;
    }

    .modal-close {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .close-btn {
        height: auto;
        width: 7%;
    }

    .modal-content {
        padding: 30px;
    }
}
</style>
