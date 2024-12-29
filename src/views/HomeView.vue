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
    computed: {
        footerLinks() {
            const locale = this.$i18n.locale
            return this.$i18n.messages[locale]?.common?.footer?.homeFooter?.columns || []
        }
    }
}
</script>

<style></style>