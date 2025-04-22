<template>
    <div class="button-shadow">
        <a href="#" :class="['app-button', variantClass]" @click.prevent="handleClick">
            {{ text }}
        </a>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click'])
const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    variant: {
        type: String,
        default: 'primary'
    }
})

const variantClass = computed(() => {
    return props.variant === 'product' ? 'btn--product' : 'btn--primary'
})

function handleClick(event) {
    emit('click', event)
}
</script>

<style lang="scss" scoped>
.button-shadow {
    position: relative;
    display: inline-block;
}

.btn--primary {
    display: inline-block;
    background-color: $color-primary;
    color: $color-white;
    font-size: 16px;
    line-height: 1.4;
    padding: 17px 80px;
    border-radius: $radius-base;
    transition: background-color 0.3s;

    @media (max-width: $bp-900) {
        font-size: 14px;
        padding: 11px 50px;
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }

    &:hover {
        background-color: $color-btn-hover;
    }

    &::before {
        content: "";
        position: absolute;
        height: 100%;
        top: 25.3px;
        left: 19.09px;
        right: 19.09px;
        bottom: -25.3px;
        background-color: $color-primary;
        opacity: 0.22;
        border-radius: $radius-base;
        filter: blur(22px);
        z-index: -1;
    }
}

.btn--product {
    background-color: transparent;
    color: $color-primary;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    border: 2px solid $color-primary;
    border-radius: $radius-large;
    padding: 10px 30px;

    @media (max-width: $bp-1186) {
        font-size: 14px;
    }

    @media (max-width: $bp-630) {
        font-size: 10px;
    }

    @media (max-width: $bp-470) {
        font-size: 14px;
    }

    &:hover {
        background: $color-btn-hover;
        border-color: $color-btn-hover;
        color: $color-white;
    }
}
</style>