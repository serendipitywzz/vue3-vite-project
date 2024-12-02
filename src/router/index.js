
import { createRouter, createWebHistory } from "vue-router";
import main from '../App.vue'
import helloworld from '../pages/HelloWorld.vue'
const routes = [
    {
        path: '/',
        name: 'main',
        component: main,
        redirect: '/helloworld',
        children: [
            {
                path: '/helloworld',
                name: helloworld,
                component: helloworld
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
