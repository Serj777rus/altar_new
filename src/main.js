import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import NewsPage from "@/components/NewsPage.vue";

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
        }
    ],
    history: createWebHashHistory(),
})
const app = createApp(App)
app.use(router)
app.mount('#app')
