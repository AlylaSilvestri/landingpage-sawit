<template>
  <div class="w-full">
    <!-- Navbar -->
    <nav class="bg-[#134611] text-white px-6 py-4 shadow-md flex items-center justify-between">
      <!-- Kiri: Foto Profil dan Nama -->
      <div class="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          class="w-10 h-10 rounded-full object-cover"
        />
        <span class="text-white font-semibold">Nama Pengguna</span>
      </div>

      <!-- Kanan: Menu dan Tombol Auth -->
      <div class="flex items-center space-x-6">
        <!-- Menu Navigasi -->
        <ul class="flex space-x-6">
          <li><a href="#" class="hover:underline">Menu</a></li>
          <li><a href="#" class="hover:underline">Tentang Kami</a></li>
          <li><a href="#" class="hover:underline">Kontak</a></li>
        </ul>
        <!-- Tombol Sign In / Up -->
        <button class="bg-white text-[#134611] font-semibold px-4 py-2 rounded-full hover:bg-gray-100">
          Sign In
        </button>
        <button class="bg-white text-[#134611] font-semibold px-4 py-2 rounded-full hover:bg-gray-100">
          Sign Up
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
