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
    data() {
        return {
            footerLinks: [
                {
                    title: "Product",
                    class: "footer-column-product",
                    links: [
                        { text: "Download", href: "#", isRouter: true },
                        { text: "Pricing", href: "#", isRouter: true },
                        { text: "Locations", href: "#", isRouter: true },
                        { text: "Server", href: "#", isRouter: true },
                        { text: "Countries", href: "#", isRouter: true },
                        { text: "Blog", href: "#", isRouter: true },
                    ],
                },
                {
                    title: "Engage",
                    class: "footer-column-company",
                    links: [
                        { text: "ECT", href: "#", isRouter: true },
                        { text: "FAQ", href: "#", isRouter: true },
                        { text: "Tutorials", href: "#", isRouter: true },
                        { text: "About Us", href: "/about", isRouter: true },
                        { text: "We're hiring!", href: "#", isRouter: true },
                    ],
                },
                {
                    title: "Privacy",
                    class: "footer-column-privacy",
                    links: [
                        { text: "Privacy", href: "#", isRouter: true },
                        { text: "Terms of Use", href: "#", isRouter: true },
                        { text: "Site Map", href: "#", isRouter: true },
                    ],
                },
            ],
        };
    },
}
</script>
<style>
    
</style>