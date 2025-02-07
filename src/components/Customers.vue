<template>
    <section class="customers">
        <div class="customers-container">
            <div class="customers-inner">
                <h2 class="customers-title">{{ $t('home.customers.title') }}</h2>
                <p class="customers-subtitle">
                    {{ $t('home.customers.subtitle') }}
                </p>
            </div>
        </div>
    </section>
    <section class="customers-card-slider">
        <div class="card-slider-wrapper">
            <div ref="slider" class="card-slider" @mousedown="startDraggingCardFn" @mouseleave="stopDraggingCardFn"
                @mouseup="stopDraggingCardFn" @mousemove="dragCardFn">
                <div v-for="(card, index) in localizedCards" :key="index" class="card">
                    <img :src="cardImages[index]" alt="" class="avatar" />
                    <div class="card-title-ava">
                        <h3 class="card-title">{{ card.name }}</h3>
                        <p class="card-location">{{ card.location }}</p>
                    </div>
                    <p class="card-text">{{ card.text }}</p>
                </div>
            </div>
            <div ref="scrollbar" class="custom-scrollbar" @mousedown="clickScrollbar">
                <div ref="thumb" class="custom-scrollbar-thumb" @mousedown="startDraggingThumbFn"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

import juliaWallsAva from '@/assets/images/julia-walls-ava.jpg'
import nieChanAva from '@/assets/images/nie-chan-ava.jpg'
import alexYoungAva from '@/assets/images/alex-young-ava.jpg'
import ninaTornsAva from '@/assets/images/nina-torns-ava.jpg'

const { locale, messages } = useI18n()

const slider = ref(null)
const scrollbar = ref(null)
const thumb = ref(null)

const isDraggingCard = ref(false)
const isDraggingThumb = ref(false)
const startX = ref(0)
const scrollLeftVal = ref(0)

const cardImages = [juliaWallsAva, nieChanAva, alexYoungAva, ninaTornsAva]

const localizedCards = computed(() => {
    const loc = locale.value
    const msgs = messages.value[loc]
    return msgs?.home.customers?.cards || []
})

function updateThumbPosition() {
    const sliderEl = slider.value
    const thumbEl = thumb.value
    const scrollbarEl = scrollbar.value
    if (!sliderEl || !thumbEl || !scrollbarEl) return

    const maxScrollLeft = sliderEl.scrollWidth - sliderEl.clientWidth
    const scrollPercentage = sliderEl.scrollLeft / maxScrollLeft
    const thumbMaxPosition = scrollbarEl.offsetWidth - thumbEl.offsetWidth
    thumbEl.style.left = `${scrollPercentage * thumbMaxPosition}px`
}

function startDraggingCardFn(e) {
    isDraggingCard.value = true
    startX.value = e.pageX - slider.value.offsetLeft
    scrollLeftVal.value = slider.value.scrollLeft
}

function stopDraggingCardFn() {
    isDraggingCard.value = false
}

function dragCardFn(e) {
    if (!isDraggingCard.value || isDraggingThumb.value) return
    const x = e.pageX - slider.value.offsetLeft - startX.value
    const walk = x * 1.5
    slider.value.scrollLeft = scrollLeftVal.value - walk
    updateThumbPosition()
}

function touchStart(e) {
    isDraggingCard.value = true
    startX.value = e.touches[0].pageX - slider.value.offsetLeft
    scrollLeftVal.value = slider.value.scrollLeft
}

function touchMove(e) {
    if (!isDraggingCard.value) return
    const x = e.touches[0].pageX - slider.value.offsetLeft - startX.value
    const walk = x * 1.5
    slider.value.scrollLeft = scrollLeftVal.value - walk
    updateThumbPosition()
}

function touchEnd() {
    isDraggingCard.value = false
}

function startDraggingThumbFn(e) {
    isDraggingThumb.value = true
    startX.value = e.pageX
    scrollLeftVal.value = slider.value.scrollLeft
    document.addEventListener("mousemove", dragThumbFn)
    document.addEventListener("mouseup", stopDraggingThumbFn)
}

function dragThumbFn(e) {
    if (!isDraggingThumb.value) return
    const thumbEl = thumb.value
    const scrollbarEl = scrollbar.value
    const sliderEl = slider.value

    const thumbMaxPosition = scrollbarEl.offsetWidth - thumbEl.offsetWidth
    const delta = e.pageX - startX.value
    const thumbMovePercentage = delta / thumbMaxPosition
    const maxScrollLeft = sliderEl.scrollWidth - sliderEl.clientWidth

    let newScrollLeft = scrollLeftVal.value + thumbMovePercentage * maxScrollLeft
    newScrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft))
    sliderEl.scrollLeft = newScrollLeft

    const scrollPercentage = sliderEl.scrollLeft / maxScrollLeft
    thumbEl.style.left = `${scrollPercentage * thumbMaxPosition}px`
}

function stopDraggingThumbFn() {
    isDraggingThumb.value = false
    document.removeEventListener("mousemove", dragThumbFn)
    document.removeEventListener("mouseup", stopDraggingThumbFn)
}

function clickScrollbar(e) {
    if (e.target === thumb.value) return
    const scrollbarEl = scrollbar.value
    const thumbEl = thumb.value
    const sliderEl = slider.value

    const thumbMaxPosition = scrollbarEl.offsetWidth - thumbEl.offsetWidth
    let clickPosition = e.pageX - scrollbarEl.offsetLeft - thumbEl.offsetWidth / 2
    clickPosition = Math.max(0, Math.min(thumbMaxPosition, clickPosition))
    thumbEl.style.left = `${clickPosition}px`

    const maxScrollLeft = sliderEl.scrollWidth - sliderEl.clientWidth
    const scrollPercentage = clickPosition / thumbMaxPosition
    sliderEl.scrollLeft = scrollPercentage * maxScrollLeft
}

onMounted(() => {
    if (slider.value) {
        slider.value.addEventListener("touchstart", touchStart)
        slider.value.addEventListener("touchmove", touchMove)
        slider.value.addEventListener("touchend", touchEnd)
    }
})

onBeforeUnmount(() => {
    if (slider.value) {
        slider.value.removeEventListener("touchstart", touchStart)
        slider.value.removeEventListener("touchmove", touchMove)
        slider.value.removeEventListener("touchend", touchEnd)
    }
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

.customers {
    display: flex;

    &-container {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 48px;
    }

    &-inner {
        text-align: center;
    }

    &-title {
        font-size: 35px;
        font-weight: 500;
        line-height: 1.4;
        color: $color-secondary;
        margin-bottom: 24px;

        @media (max-width: 1186px) {
            font-size: 25px;
        }
    }

    &-subtitle {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.8;
        color: $color-text;
        margin-bottom: 48px;
        max-width: 550px;

        @media (max-width: 1186px) {
            font-size: 14px;
            margin-bottom: 0;
        }

        @media (max-width: 780px) {
            margin-left: 0;
        }
    }

    &-card-slider {
        text-align: center;
        margin: 0 auto;
        width: 90vw;
        transform: translateX(-10%);
    }
}

.card-slider-wrapper {
    position: relative;
    margin-bottom: 186px;
}

.card-slider {
    display: flex;
    position: relative;
    overflow-x: hidden;
    scroll-behavior: auto;
    margin-bottom: 72px;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.card {
    border-radius: 10px;
    border: 2px solid $color-primary;
    padding: 30px;
    max-width: 400px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 50px;
    flex-shrink: 0;
    scroll-snap-align: start;
    box-sizing: content-box;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media (max-width: 575px) {
        max-width: 200px;
        padding: 15px;
    }

    .avatar {
        max-width: 50px;
        max-height: 50px;
        object-fit: cover;
        margin-right: 20px;

        @media (max-width: 575px) {
            width: 35px;
            height: 35px;
        }
    }

    .card-title-ava {
        display: flex;
        flex-direction: column;
        text-align: left;

        .card-title {
            font-size: 18px;
            font-weight: 500;
            line-height: 1.6;
            color: $color-secondary;

            @media (max-width: 575px) {
                font-size: 16px;
            }
        }

        .card-location {
            font-size: 14px;
            font-weight: 400;
            line-height: 2.1;
            color: $color-text;

            @media (max-width: 575px) {
                font-size: 12px;
            }
        }
    }

    .card-text {
        font-size: 16px;
        font-weight: 400;
        color: $color-dark;
        line-height: 1.8;
        margin-top: 8px;

        @media (max-width: 575px) {
            font-size: 14px;
        }
    }
}

.custom-scrollbar {
    position: absolute;
    bottom: -72px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 11px;
    background-color: rgba(245, 250, 254, 1);
    border-radius: 45px;
    overflow: hidden;

    @media (max-width: 780px) {
        bottom: -55px;
    }

    .custom-scrollbar-thumb {
        height: 100%;
        width: 45px;
        background-color: $color-primary;
        border-radius: 45px;
        position: relative;
    }
}
</style>