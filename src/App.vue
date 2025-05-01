<template>
  <v-app>
    <div class="flex flex-col min-h-screen">
      <!-- Navbar tetap muncul di semua halaman -->
      <Navbar v-if="showNavbar" />

      <!-- Konten utama -->
      <v-main class="flex-grow">
        <router-view />
      </v-main>

      <!-- Footer hanya akan disembunyikan di halaman Register -->
      <Footer v-if="showFooter" />
    </div>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// Menentukan rute yang tidak menampilkan Footer
const hideFooterRoutes = ['/register', '/login']

// Navbar tetap muncul, Footer hanya disembunyikan pada halaman register
const showNavbar = computed(() => true) // Navbar selalu muncul
const showFooter = computed(() => !hideFooterRoutes.includes(route.path)) // Footer tidak muncul di halaman register
</script>
