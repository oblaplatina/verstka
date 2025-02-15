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

<style scoped>
.button-shadow {
    position: relative;
    display: inline-block;
}

.btn--primary {
    display: inline-block;
    background-color: #8CC5F9;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.4;
    padding: 17px 80px;
    border-radius: 10px;
    margin-right: 70px;
    text-align: center;
    position: relative;
    z-index: 2;
    transition: background-color 0.3s;
}

.btn--primary:hover {
    background-color: #878ABC;
}

.btn--primary::before {
    content: "";
    position: absolute;
    height: 100%;
    top: 25.3px;
    left: 19.09px;
    right: 19.09px;
    bottom: -25.3px;
    background-color: #5F7A7E;
    opacity: 0.22;
    border-radius: 10px;
    filter: blur(22px);
    z-index: -1;
}

@media (max-width: 900px) {
    .btn--primary {
        font-size: 14px;
        padding: 11px 50px;
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }
}

.btn--product {
    background-color: transparent;
    color: #8CC5F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    border: 2px solid rgba(140, 197, 249, 1);
    border-radius: 47px;
    padding: 10px 30px;
}

.btn--product:hover {
    background: rgba(135, 138, 188, 1);
    border-color: rgba(135, 138, 188, 1);
    color: #FFFFFF;
}

@media (max-width: 1186px) {
    .btn--product {
        font-size: 14px;
    }
}

@media (max-width: 630px) {
    .btn--product {
        font-size: 10px;
    }
}

@media (max-width: 470px) {
    .btn--product {
        font-size: 14px;
    }
}
</style>