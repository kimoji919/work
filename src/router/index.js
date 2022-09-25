import { createRouter, createWebHashHistory } from 'vue-router'

import rule from '../views/rule.vue'
import cal from '../views/cal.vue'
import Login from '../views/login.vue'
import decryption from '../views/Image-decryption.vue'
import encryption from '../views/Image-encryption.vue'
import key from '../views/Image-key.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: { name: "Login" }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { title: "index" },
        href: '/login'
    },
    {
        path: '/rule',
        name: 'rule',
        component: rule,
        meta: { title: "mode2" },
        href: "/rule",
    },
    {
        path: '/decryption',
        name: 'decryption',
        component: decryption,
        meta: { title: "图片解密" },
        href: "/decryption",
    },
    {
        path: '/encryption',
        name: 'encryption',
        component: encryption,
        meta: { title: "图片加密" },
        href: "/encryption",
    },
    {
        path: '/key',
        name: 'key',
        component: key,
        meta: { title: "图片密码" },
        href: "/key",
    },


    {
        path: '/cal',
        name: 'cal',
        component: cal,
        meta: { title: "mode1" },
        href: "/cal",
    },

]



const router = createRouter({
    mode: 'hash',
    history: createWebHashHistory(),
    routes
})

export default router