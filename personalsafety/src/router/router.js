import { createRouter, createWebHistory } from 'vue-router';

import Home from "../pages/home.vue";
import activeService from "../pages/active-service.vue";
import personalSafety from "../pages/personalSafety.vue";
import pageTeams from "../pages/page-teams.vue";
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';

const  routes = [

    {path:'/',component:Home},
    {path:'/home',component:Home},
    {path:'/personalSafety',component:personalSafety},
    {path:'/activeService',component:activeService},
    {path:'/pageTeams',component:pageTeams},
    {path: '/login', component: Login},
    {path: '/register', component: Register}


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
