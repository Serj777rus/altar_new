import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { createHead } from "@vueuse/head";
import Home from "./components/Home.vue";
import NewsPage from "@/components/NewsPage.vue";
import AboutUs from "@/components/AboutUs.vue";
import ContactPage from "@/components/ContactPage.vue";
import LoginPage from "@/components/Dashboard/LoginPage.vue";
import BlogPost from "@/components/BlogPost.vue";

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
        },
        {
            path: '/blog',
            component: NewsPage,
            name: 'Blog',
        },
        {
            path: '/blog/:slug',
            component: () => import('@/components/BlogPost.vue'),
            name: 'BlogPost',
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
        },
        {
            path: '/login',
            component: LoginPage,
            name: 'Login',
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
app.provide('apiBaseUrl', 'https://tryaltar.com/api/')
// app.provide('apiBaseUrl', 'http://192.168.31.233:3000/')
app.provide('fileBaseUrl', 'https://admin.tryaltar.com')
app.use(router)
const head = createHead()
app.provide('useHead', head)
app.mount('#app')
