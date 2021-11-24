import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
// HomeビューとHogeビューのインポート
import Home from './views/Home.vue';
import Hoge from './views/Hoge.vue';

const routes = [
    {
        path: '/',
        component: Home  // Homeビュールーティング
    },
    {
        path: '/hoge',
        component: Hoge  // Hogeビュールーティング
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
