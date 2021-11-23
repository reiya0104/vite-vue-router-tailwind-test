import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router'
// HelloWorldコンポーネントとhogeコンポーネントのインポート
import HelloWorld from './components/HelloWorld.vue';
import Hoge from './components/Hoge.vue';

const routes = [
    {
        path: '/',
        component: HelloWorld  // HelloWorldコンポーネントルーティング
    },
    {
        path: '/hoge',
        component: Hoge  // Hogeコンポーネントルーティング
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
