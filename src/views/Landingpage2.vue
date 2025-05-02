<template>
  <div class="w-full">
  <!-- Hero Section -->
    <section class="relative h-screen bg-cover bg-center" style="background-image: url('https://placehold.co/1400x800/green/white')">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative flex flex-col items-center justify-center h-full text-white text-center z-10 px-4">
        <h1 class="text-5xl font-bold mb-2">Sawit</h1>
        <p class="text-xl">Sistem Analisis dan Informasi Wisata Tani untuk Pengelolaan Kelapa Sawit</p>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="py-20 bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E'); background-size: 100px 100px;"></div>
    </div>
    
    <!-- Animated shapes -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
    <div class="absolute top-40 right-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-10 left-1/2 w-28 h-28 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12">
      
        <!-- Image side with decorative elements -->
        <div data-aos="fade-right" class="w-full lg:w-1/2 relative">
          <div class="absolute -left-6 -top-6 w-24 h-24 border-2 border-green-400 opacity-30"></div>
          <div class="absolute -right-6 -bottom-6 w-24 h-24 border-2 border-green-400 opacity-30"></div>
          
          <div class="relative overflow-hidden rounded-xl shadow-2xl group">
            <div class="absolute inset-0 bg-gradient-to-r from-green-500/40 to-green-700/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
            
            <img 
              :src="imageUrl" 
              alt="Palm Oil Plantation" 
              class="w-full object-cover transform transition-transform duration-500 group-hover:scale-105 relative z-0"
            >
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-green-900/90 to-transparent z-20">
              <div class="font-bold text-lg mb-2">Kualitas Premium</div>
              <p class="text-sm">Kami hanya bekerja dengan petani terbaik untuk memastikan kualitas produk sawit yang optimal</p>
            </div>
          </div>
          
          <!-- Stats Card -->
          <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg absolute -bottom-8 -right-8 shadow-lg border border-white/20">
            <div class="flex items-center gap-3">
              <div class="bg-green-500 text-white h-14 w-14 rounded-lg flex items-center justify-center text-xl font-bold">10+</div>
              <div class="text-white">
                <div class="text-xs text-green-300">Tahun Pengalaman</div>
                <div class="font-semibold">Industri Kelapa Sawit</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Content side -->
        <div data-aos="fade-left" class="w-full lg:w-1/2">
          <div class="card bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden">
            <div class="card-body">
              <h2 class="text-3xl font-bold text-white mb-2 flex items-center">
                <span class="text-green-400 mr-3"><i class="fas fa-leaf"></i></span> 
                Selamat Datang di Sawit
              </h2>
              
              <div class="w-16 h-1 bg-green-400 mb-6"></div>
              
              <p class="text-gray-100 mb-8 leading-relaxed">
                Kami adalah platform manajemen terpadu yang menghubungkan petani sawit, pengepul, dan manajer dalam satu ekosistem terintegrasi. Dengan pengalaman lebih dari 10 tahun, Sawit telah menjadi mitra terpercaya untuk semua pihak yang terlibat dalam rantai penghasilan hasil kelapa sawit.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(feature, index) in features" :key="index" 
                     class="bg-white/10 hover:bg-white/15 p-4 rounded-lg flex items-center gap-4 transition-all duration-300 border border-white/5 hover:-translate-y-1 hover:shadow-lg">
                  <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-lg p-3 text-white">
                    <i :class="feature.icon"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-medium">{{ feature.title }}</h3>
                    <p class="text-green-200 text-xs mt-1">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8 flex flex-col sm:flex-row gap-4">
                <button class="btn btn-primary bg-gradient-to-r from-green-500 to-green-600 border-0 hover:from-green-600 hover:to-green-700 gap-2">
                  <i class="fas fa-headset"></i> Konsultasi Gratis
                </button>
                <button class="btn bg-transparent border-green-400 text-green-400 hover:bg-green-400 hover:text-green-900 gap-2">
                  <i class="fas fa-info-circle"></i> Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Layanan Kami Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-green-800">Layanan Kami</h2>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            Solusi terpadu untuk ekosistem industri kelapa sawit yang menghubungkan semua pihak dalam rantai nilai.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Layanan 1 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div class="p-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center text-green-800 mb-2">Platform Terpadu</h3>
              <p class="text-gray-600 text-center text-sm">
                Platform terpadu untuk mengelola seluruh rantai nilai kelapa sawit dari petani hingga pengguna akhir.
              </p>
              <div class="text-center mt-4">
                <a href="#" class="text-green-500 inline-flex items-center text-sm font-medium">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Layanan 2 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div class="p-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center text-green-800 mb-2">Pantau Tren Harga</h3>
              <p class="text-gray-600 text-center text-sm">
                Pantau tren harga dan dapatkan informasi pasar terbaru untuk keputusan bisnis yang lebih baik.
              </p>
              <div class="text-center mt-4">
                <a href="#" class="text-green-500 inline-flex items-center text-sm font-medium">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Layanan 3 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div class="p-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center text-green-800 mb-2">Pengangkutan & Distribusi</h3>
              <p class="text-gray-600 text-center text-sm">
                Layanan pengangkutan dan distribusi untuk mempermudah pengiriman dari petani ke pasar.
              </p>
              <div class="text-center mt-4">
                <a href="#" class="text-green-500 inline-flex items-center text-sm font-medium">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Layanan 4 -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div class="p-6">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center text-green-800 mb-2">Pembayaran Cepat</h3>
              <p class="text-gray-600 text-center text-sm">
                Sistem pembayaran cepat dan aman dengan pencatatan yang terintegrasi ke Sawit.
              </p>
              <div class="text-center mt-4">
                <a href="#" class="text-green-500 inline-flex items-center text-sm font-medium">
                  Pelajari Lebih Lanjut
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-br from-green-800 to-green-900 relative">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); background-size: 60px 60px;"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Header with animation -->
      <div data-aos="fade-down" class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white">Tentang Kami</h2>
        <div class="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
      </div>

      <!-- Main content cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Visi & Misi Card -->
        <div data-aos="fade-right" class="card bg-white bg-opacity-100 backdrop-blur-sm shadow-xl overflow-hidden border border-green-700/30">
          <div class="card-body text-black"> <!-- Teks diubah menjadi hitam untuk kontras -->
            <!-- Visi Section -->
            <div class="mb-6">
              <h3 class="text-2xl font-bold mb-4 flex items-center text-green-600"> <!-- Teks hijau cerah untuk kontras -->
                <i class="fas fa-shield-alt mr-3"></i>
                Visi Kami
              </h3>
              <p class="leading-relaxed">
                Menjadi platform terdepan dalam menghubungkan seluruh pemangku kepentingan industri kelapa sawit untuk menciptakan ekosistem yang berkelanjutan, transparan, dan menguntungkan bagi semua pihak.
              </p>
            </div>

            <!-- Divider -->
            <div class="divider my-2 before:bg-green-500/30 after:bg-green-500/30"></div>

            <!-- Misi Section -->
            <div>
              <h3 class="text-2xl font-bold mb-4 flex items-center text-green-600">
                <i class="fas fa-tasks mr-3"></i>
                Misi Kami
              </h3>
              <ul class="space-y-3">
                <li v-for="(item, index) in missionItems" :key="index" class="flex items-start">
                  <div class="mt-1 mr-3 text-green-400">
                    <i class="fas fa-check-circle"></i>
                  </div>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-8">
          <!-- Sejarah Card -->
          <div data-aos="fade-left" class="card bg-white bg-opacity-100 backdrop-blur-sm shadow-xl overflow-hidden border border-green-700/30">
            <div class="card-body text-black">
              <h3 class="text-2xl font-bold mb-4 flex items-center text-green-600">
                <i class="fas fa-history mr-3"></i>
                Sejarah Kami
              </h3>
              
              <div class="space-y-6">
                <div v-for="(item, index) in historyItems" :key="index" class="flex">
                  <div class="flex-shrink-0 mr-4">
                    <div class="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 bg-opacity-20 border-2 border-green-400 text-green-200 font-bold">
                      {{ item.year }}
                    </div>
                  </div>
                  <div class="pt-1">
                    <p class="text-sm leading-relaxed">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Tim Card -->
          <div data-aos="fade-up" class="card bg-white bg-opacity-100 backdrop-blur-sm shadow-xl overflow-hidden border border-green-700/30">
            <div class="card-body text-black">
              <h3 class="text-2xl font-bold mb-6 flex items-center text-green-600">
                <i class="fas fa-users mr-3"></i>
                Tim Kami
              </h3>
              
              <div class="flex justify-center gap-12">
                <div v-for="member in teamMembers" :key="member.id" class="text-center">
                  <div class="avatar mb-4 online">
                    <div class="w-20 h-20 rounded-full ring ring-green-400 ring-offset-2 ring-offset-green-800 bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center text-green-800 font-bold text-xl">
                      {{ member.initials }}
                    </div>
                  </div>
                  <div class="font-bold text-lg">{{ member.name }}</div>
                  <div class="text-green-600">{{ member.position }}</div> <!-- Teks hijau untuk tim -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Hubungi Kami Card -->
      <div data-aos="fade-up" class="card bg-white bg-opacity-100 backdrop-blur-sm shadow-xl overflow-hidden border border-green-700/30 mt-10">
        <div class="card-body text-black">
          <h3 class="text-2xl font-bold mb-6 flex items-center text-green-600">
            <i class="fas fa-envelope mr-3"></i>
            Hubungi Kami
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Address -->
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <div class="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center text-green-300">
                  <i class="fas fa-map-marker-alt text-xl"></i>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 mb-2">Alamat</h4> <!-- Alamat dengan teks hijau -->
                <p class="text-sm">Jl. Kelapa Sawit No. 123</p>
                <p class="text-sm">Jakarta Selatan, 12180</p>
                <p class="text-sm">Indonesia</p>
              </div>
            </div>
            
            <!-- Contact Info -->
            <div class="flex">
              <div class="flex-shrink-0 mr-4">
                <div class="w-12 h-12 rounded-full bg-green-500 bg-opacity-20 flex items-center justify-center text-green-300">
                  <i class="fas fa-phone-alt text-xl"></i>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-green-600 mb-2">Kontak</h4> <!-- Kontak dengan teks hijau -->
                <p class="text-sm">Email: info@sawit.id</p>
                <p class="text-sm">Telepon: +62 21 5456 7890</p>
                <div class="flex gap-2 mt-2">
                  <a href="#" class="btn btn-circle btn-xs btn-ghost text-green-300">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="btn btn-circle btn-xs btn-ghost text-green-300">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="#" class="btn btn-circle btn-xs btn-ghost text-green-300">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Consultation Button -->
            <div class="flex items-center justify-center md:justify-end">
              <button class="btn btn-primary bg-green-500 hover:bg-green-600 border-green-600 text-white gap-2">
                <i class="fas fa-calendar-check"></i>
                Jadwalkan Konsultasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Footer -->
    <footer class="bg-green-800 text-white pt-12 pb-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-xl font-bold mb-4">Sawit</h3>
            <p class="text-sm mb-4">
              Mitra tepercaya dalam mengelola transaksi antara petani, pengepul, dan manager di seluruh rantai nilai.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-white hover:text-green-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-green-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" class="text-white hover:text-green-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85 0 3.204-.012 3.584-.069 4.85-.149 3.228-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul class="text-sm">
              <li class="mb-2"><a href="#" class="hover:text-green-200">Beranda</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Tentang Kami</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Layanan</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Blog</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Kontak</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-xl font-bold mb-4">Layanan</h3>
            <ul class="text-sm">
              <li class="mb-2"><a href="#" class="hover:text-green-200">Manajemen Transaksi</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Pelacakan Hasil Panen</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Pembayaran Digital</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Analisis Data</a></li>
              <li class="mb-2"><a href="#" class="hover:text-green-200">Konsultasi</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-xl font-bold mb-4">Hubungi Kami</h3>
            <ul class="text-sm">
              <li class="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Agung Utara No. 123, Jakarta 14350</span>
              </li>
              <li class="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@sawit.com</span>
              </li>
              <li class="flex items-start mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 21 8765 4321</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="border-t border-green-700 pt-8 pb-4">
          <div class="md:flex md:justify-between items-center">
            <div class="md:w-1/2 mb-6 md:mb-0">
              <h4 class="text-lg font-bold mb-2">Berlangganan Newsletter</h4>
              <p class="text-sm mb-4">Dapatkan berita terbaru dan penawaran spesial dari kami.</p>
              <div class="flex">
                <input type="email" placeholder="Alamat Email Anda" class="px-4 py-2 w-full md:w-64 text-gray-800 rounded-l focus:outline-none" />
                <button class="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r text-white font-medium">Langganan</button>
              </div>
            </div>
            <div class="md:w-1/3">
              <img src="https://via.placeholder.com/200x80" alt="Sawit Logo" class="h-12" />
            </div>
          </div>
        </div>


        <!-- Copyright -->
        <div class="border-t border-green-700 pt-6 mt-4">
          <div class="md:flex md:justify-between">
            <p class="text-sm text-center md:text-left">&copy; 2025 Sawit. Hak Cipta Dilindungi.</p>
            <div class="flex justify-center md:justify-end space-x-4 mt-4 md:mt-0">
              <a href="#" class="text-sm hover:text-green-200">Kebijakan Privasi</a>
              <a href="#" class="text-sm hover:text-green-200">Syarat & Ketentuan</a>
              <a href="#" class="text-sm hover:text-green-200">Peta Situs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TentangKamiPage',
  data() {
    return {
      imageUrl: 'https://placehold.co/600x400/006400/white',
      features: [
        {
          icon: 'fas fa-check-circle',
          title: 'Transaksi Transparan',
          description: 'Pantau setiap transaksi dengan jelas'
        },
        {
          icon: 'fas fa-coins',
          title: 'Harga Kompetitif',
          description: 'Dapatkan harga terbaik di pasaran'
        },
        {
          icon: 'fas fa-bolt',
          title: 'Pembayaran Cepat',
          description: 'Proses transaksi dalam 24 jam'
        },
        {
          icon: 'fas fa-clock',
          title: 'Layanan 24/7',
          description: 'Tim dukungan selalu siap membantu'
        }
      ],
      missionItems: [
        'Mendigitalkan proses petani kelapa sawit melalui teknologi digital',
        'Mendukung praktik pertanian berkelanjutan yang ramah lingkungan',
        'Meningkatkan kesejahteraan petani melalui akses pasar yang lebih baik',
        'Meningkatkan transparansi dalam setiap proses bisnis'
      ],
      historyItems: [
        {
          year: '2018',
          description: 'Didirikan dengan visi sederhana untuk menghubungkan petani sawit dengan pasar yang lebih baik.'
        },
        {
          year: '2023',
          description: 'Berkembang menjadi platform terpadu dengan jangkauan meliputi seluruh rantai nilai industri kelapa sawit di Indonesia.'
        }
      ],
      teamMembers: [
        {
          id: 1,
          name: 'Ahmad Susanto',
          position: 'CEO & Founder',
          initials: 'AS'
        },
        {
          id: 2,
          name: 'Dewi Rahayu',
          position: 'COO',
          initials: 'DR'
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Any additional custom styles can go here */
</style>