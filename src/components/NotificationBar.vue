<template>
    <div v-if="visible" class="notification-bar">
        <span class="notification-text">{{ $t('home.notificationBar.text') }}</span>
        <img class="close-icon" src="@/assets/images/close-icon.svg" alt="Close" @click="closeNotificationBar" />

    </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(true)

const closeNotificationBar = () => {
    visible.value = false
}
</script>
<style>
.notification-bar {
    background-color: #08090A;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    box-sizing: border-box;
}

.notification-bar-hidden {
    opacity: 0;
    height: 0;
    overflow: hidden;
    padding: 0;
    transition: opacity 0.5s ease, height 0.5s ease;
}

.notification-text {
    margin: 0 auto;
    color: #F5FAFE;
    font-size: 18px;
    padding: 21px;
}

.close-icon {
    padding-right: 22px;
    cursor: pointer;
    position: relative;
}

@media (max-width: 430px) {
    .notification-text {
        font-size: 12px;
    }
}
</style>