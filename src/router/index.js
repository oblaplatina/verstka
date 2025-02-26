import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutUs from "@/views/AboutUs.vue";
import { ROUTES } from "./routes";

const routes = [
  {
    path: ROUTES.HOME,
    name: "home",
    component: HomeView,
  },
  {
    path: ROUTES.ABOUT,
    name: "about",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
