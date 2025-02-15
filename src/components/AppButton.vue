<template>
    <div class="button-shadow">
        <a href="#" class="btn" @click.prevent="handleClick">
            <slot>{{ text }}</slot>
        </a>
    </div>
</template>

<script setup>
const emit = defineEmits(['click'])
const props = defineProps({
    text: {
        type: String,
        default: ''
    }
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
    background-color: #8CC5F9;
    color: #FFFFFF;
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
    background-color: #8CC5F9;
    opacity: 0.22;
    border-radius: $radius-base;
    filter: blur(22px);
    z-index: -1;
}

.btn--product {
    background-color: transparent;
    color: #8CC5F9;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    border: 2px solid rgba(140, 197, 249, 1);
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
}

.btn--product:hover {
    background: rgba(135, 138, 188, 1);
    border-color: rgba(135, 138, 188, 1);
    color: $color-white;
}
</style>