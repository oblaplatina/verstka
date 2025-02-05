<template>
    <div>
        <Header></Header>
        <NotificationBar></NotificationBar>
        <Main></Main>
        <Stat></Stat>
        <Info></Info>
        <BestProduct></BestProduct>
        <Together></Together>
        <Customers></Customers>
        <MessageInfo></MessageInfo>
        <Footer :links="footerLinks"></Footer>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import Main from '@/components/Main.vue'
import Stat from '@/components/Stat.vue'
import Info from '@/components/Info.vue'
import BestProduct from '@/components/BestProduct.vue'
import Together from '@/components/Together.vue'
import Customers from '@/components/Customers.vue'
import MessageInfo from '@/components/MessageInfo.vue'
import Footer from '@/components/Footer.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, messages } = useI18n()

const footerLinks = computed(() => {
    return messages.value[locale.value]?.common?.footer?.homeFooter?.columns || []
})
</script>

<style></style>