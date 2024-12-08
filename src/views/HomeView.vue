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

<script>
import BestProduct from '@/components/BestProduct.vue';
import Customers from '@/components/Customers.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Info from '@/components/Info.vue';
import Main from '@/components/Main.vue';
import MessageInfo from '@/components/MessageInfo.vue';
import NotificationBar from '@/components/NotificationBar.vue';
import Stat from '@/components/Stat.vue';
import Together from '@/components/Together.vue';

export default {
    name: 'HomeView',
    components: {
        Header,
        NotificationBar,
        Main,
        Stat,
        Info,
        BestProduct,
        Together,
        Customers,
        MessageInfo,
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
                    title: "Company",
                    class: "footer-column-company",
                    links: [
                        { text: "Brand", href: "#", isRouter: true },
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

};
</script>

<style>

</style>