import { createRouter, createWebHistory } from "vue-router";
import HomeOk from '../components/Home.vue';
import SignUp from '../components/SignUp.vue';


const routes = [
    {
        name:'home',
        component:HomeOk,
        path:'/'
    },
    {
        name:'signup',
        component:SignUp,
        path:'/signup'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router