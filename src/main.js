import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import NewsPage from "@/components/NewsPage.vue";
import AboutUs from "@/components/AboutUs.vue";
import ContactPage from "@/components/ContactPage.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
        },
        {
            path: '/news',
            component: NewsPage,
            name: 'News',
        },
        {
            path: '/about',
            component: AboutUs,
            name: 'AboutUs',
        },
        {
            path: '/contact',
            component: ContactPage,
            name: 'Contact',
        }
    ],
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    }
})
const app = createApp(App)
app.use(router)
app.mount('#app')
