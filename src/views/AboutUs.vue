<template>
    <div>
        <Header></Header>
        <AboutMain />
        <TeamSection />
        <QuoteSection />
        <ValueSection />
        <AboutJobsInfo />
        <Footer :links="footerLinks"></Footer>
    </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import AboutMain from '@/components/AboutMain.vue'
import TeamSection from '@/components/TeamSection.vue'
import QuoteSection from '@/components/QuoteSection.vue'
import ValueSection from '@/components/ValueSection.vue'
import AboutJobsInfo from '@/components/AboutJobsInfo.vue'
import Footer from '@/components/Footer.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, messages } = useI18n()

const footerLinks = computed(() => {
    return messages.value[locale.value]?.common?.footer?.about?.columns || []
})
</script>
<style></style>