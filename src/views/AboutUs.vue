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
<script>
import AboutJobsInfo from '@/components/AboutJobsInfo.vue';
import AboutMain from '@/components/AboutMain.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import QuoteSection from '@/components/QuoteSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import ValueSection from '@/components/ValueSection.vue';


export default {
    name: 'AboutUs',
    components: {
        Header,
        AboutMain,
        TeamSection,
        QuoteSection,
        ValueSection,
        AboutJobsInfo,
        Footer

    },
    computed: {
        footerLinks() {
            const locale = this.$i18n.locale
            return this.$i18n.messages[locale]?.common?.footer?.about?.columns || []
        }
    }
}
</script>
<style></style>