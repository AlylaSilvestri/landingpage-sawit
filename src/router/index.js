import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/LandingPage.vue";  // LandingPage.vue
import HelloWorld from "../components/HelloWorld.vue";  // Menambahkan komponen HelloWorld jika diperlukan
import Navbar from "../components/Navbar.vue"; // Navbar.vue (jika digunakan dalam layout)
import LandingPage2 from "../views/Landingpage2.vue";  // Import LandingPage2.vue

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'dashboard',
            component: DashboardView
        },
        {
            path: "/hello",
            name: 'hello',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/views/Register.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/Login.vue')
        },
        {
            path: '/landingpage2',  // URL untuk mengakses LandingPage2
            name: 'LandingPage2',   // Nama rute
            component: LandingPage2 // Komponen yang dituju
        }
    ]
})

export default router;
