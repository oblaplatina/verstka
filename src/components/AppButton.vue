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

<style scoped>
.button-shadow {
    position: relative;
    display: inline-block;
}

.btn {
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

.btn:hover {
    background-color: #878ABC;
}

.btn::before {
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
    .btn {
        font-size: 14px;
        padding: 11px 50px;
        flex: 0 0 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }
}
</style>