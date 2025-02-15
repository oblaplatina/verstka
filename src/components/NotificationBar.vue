<template>
    <div v-if="visible" class="notification-bar">
        <span class="notification-text">{{ $t('home.notificationBar.text') }}</span>
        <img class="close-icon" src="@/assets/images/close-icon.svg" alt="Close" @click="closeNotificationBar" />

    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: true,
        };
    },
    methods: {
        closeNotificationBar() {
            this.visible = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.notification-bar {
    background-color: $color-bg-base;
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

    &.notification-bar-hidden {
        opacity: 0;
        height: 0;
        overflow: hidden;
        padding: 0;
        transition: opacity 0.5s ease, height 0.5s ease;
    }

    .notification-text {
        margin: 0 auto;
        color: #f5fafe;
        font-size: 18px;
        padding: 21px;

        @media (max-width: $bp-430) {
            font-size: 12px;
        }
    }

    .close-icon {
        padding-right: 22px;
        cursor: pointer;
        position: relative;
    }
}
</style>