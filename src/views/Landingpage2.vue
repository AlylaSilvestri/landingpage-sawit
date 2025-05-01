<template>
    <div class="w-full">
      <!-- Hero Section -->
      <div
        class="w-full h-96 sm:h-[40rem] bg-cover bg-center relative flex items-center justify-center"
        style="background-image: url('/sawit1.png')"
      >
        <!-- Text in the Center -->
        <div class="text-center z-10 text-white space-y-2">
          <h1 class="text-4xl sm:text-6xl font-bold">SAWIT</h1>
          <p class="text-lg sm:text-xl">Sistem Analisis dan Informasi Wisata Tani</p>
        </div>
      </div>
  
      <!-- Welcome Section with Green Background -->
      <div class="w-full bg-[#134611] py-16 flex items-center justify-between">
        <!-- Left Side (Sawit Image) -->
        <div class="w-1/2">
          <img src="/sawit2.png" alt="Sawit" class="w-full h-auto max-h-[350px] object-contain mx-auto" />
        </div>
  
        <!-- Right Side (Text and Welcome Message) -->
        <div class="w-1/2 text-white px-8 space-y-4">
          <h2 class="text-4xl sm:text-5xl font-bold">Selamat Datang di Sawit</h2>
          <p class="text-lg sm:text-xl">
            Temukan solusi terbaik untuk manajemen kelapa sawit, mulai dari pemantauan harga hingga
            transaksi yang transparan dan efisien.
          </p>
          <p class="text-lg sm:text-x1">
            Platform kami memudahkan Anda untuk melakukan transaksi dan pencatatan hasil panen kelapa sawit dengan cara yang
            mudah dan praktis.
          </p>
        </div>
      </div>
  
      <!-- Main Content Section -->
      <div class="p-4 pt-20 space-y-10 w-full bg-[#F0F0F0]">
        <!-- Judul Tengah -->
        <div class="flex justify-center pr-6">
          <h1 class="text-2xl sm:text-4xl font-bold text-center" style="color: #134611;">
            Layanan Kami
          </h1>
        </div>
  
        <!-- Summary Cards -->
        <div class="flex flex-col sm:flex-row justify-center items-center gap-8 bg-[#F0F0F0] py-12">
          <!-- Card 1 -->
          <div class="relative bg-white p-8 w-60 h-72 rounded-lg shadow-md text-center bg-[#E8FCCF]">
            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#E8FCCF] rounded-full shadow-md overflow-hidden"></div>
            <h2 class="text-[#134611] font-bold mt-16 mb-2 text-xl">Jual Hasil Panen</h2>
            <p class="text-[#134611] text-sm">Jual hasil panen dengan harga terbaik dan tanpa perantara yang rumit.</p>
          </div>
  
          <!-- Card 2 -->
          <div class="relative bg-white p-8 w-60 h-72 rounded-lg shadow-md text-center bg-[#E8FCCF]">
            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#E8FCCF] rounded-full shadow-md overflow-hidden"></div>
            <h2 class="text-[#134611] font-bold mt-16 mb-2 text-xl">Kelola Pembelian</h2>
            <p class="text-[#134611] text-sm">Kelola pembelian dari petani dengan sistem pencatatan yang sangat memudahkan.</p>
          </div>
  
          <!-- Card 3 -->
          <div class="relative bg-white p-8 w-60 h-72 rounded-lg shadow-md text-center bg-[#E8FCCF]">
            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#E8FCCF] rounded-full shadow-md overflow-hidden"></div>
            <h2 class="text-[#134611] font-bold mt-16 mb-2 text-xl">Pantau Harga</h2>
            <p class="text-[#134611] text-sm">Pantau harga transaksi dan harga pasar dalam satu dashboard praktis.</p>
          </div>
  
          <!-- Card 4 (New) -->
          <div class="relative bg-white p-8 w-60 h-72 rounded-lg shadow-md text-center bg-[#E8FCCF]">
            <div class="absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-[#E8FCCF] rounded-full shadow-md overflow-hidden"></div>
            <h2 class="text-[#134611] font-bold mt-16 mb-2 text-xl">Laporan Analisis</h2>
            <p class="text-[#134611] text-sm">Dapatkan laporan analisis kelapa sawit yang akurat dan up-to-date.</p>
          </div>
        </div>
      </div>
 
      <!-- Ekosistem Kami Section -->
<div class="w-full bg-[#134611] py-16 px-8">
  <!-- Judul -->
  <div class="text-center mb-12">
    <h2 class="text-white text-4xl font-bold">Ekosistem Kami</h2>
  </div>

  <!-- Gambar berjajar  -->
  <div class="flex flex-row justify-center items-center gap-8 flex-wrap">
    <img src="/sawit2.png" alt="Sawit Ekosistem 1" class="w-80 h-auto shadow-xl" />
    <img src="/sawit2.png" alt="Sawit Ekosistem 2" class="w-80 h-auto shadow-xl" />
    <img src="/sawit2.png" alt="Sawit Ekosistem 3" class="w-80 h-auto shadow-xl" />
  </div>
</div>

<!-- Solusi Terbaik Section -->
<div class="w-full bg-gray-100 py-16 px-8">
  <!-- Judul -->
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold text-green-800">Solusi Terbaik</h2>
  </div>

  <!-- Card Container -->
  <div class="flex flex-wrap justify-center gap-8">
    <!-- Card 1 -->
    <div class="bg-white rounded-2xl shadow-md w-80">
      <img src="/petani1.png" alt="Solusi Petani" class="w-full h-48 object-cover rounded-t-2xl" />
      <div class="p-6 text-center">
        <h3 class="text-xl font-semibold text-green-800 mb-2">Solusi untuk Petani</h3>
        <p class="text-green-800">Bantuan teknologi untuk meningkatkan hasil panen dan efisiensi kerja lapangan.</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="bg-white rounded-2xl shadow-md w-80">
      <img src="/petani2.png" alt="Solusi Pengepul" class="w-full h-48 object-cover rounded-t-2xl" />
      <div class="p-6 text-center">
        <h3 class="text-xl font-semibold text-green-800 mb-2">Solusi untuk Pengepul</h3>
        <p class="text-green-800">Kemudahan dalam mengakses pasokan dan pengelolaan transaksi secara digital.</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="bg-white rounded-2xl shadow-md w-80">
      <img src="/petani3.png" alt="Solusi Manager" class="w-full h-48 object-cover rounded-t-2xl" />
      <div class="p-6 text-center">
        <h3 class="text-xl font-semibold text-green-800 mb-2">Solusi untuk Manager</h3>
        <p class="text-green-800">Pantau seluruh ekosistem agribisnis dengan data real-time dan laporan otomatis.</p>
      </div>
    </div>
  </div>
</div>


  
<!-- Section Background Sawit2 -->
<div class="w-full bg-cover bg-center flex items-center justify-center py-20" style="background-image: url('/sawit2.png')">
  <div class="bg-green-900 bg-opacity-70 w-[80%] max-w-7xl mx-auto rounded-2xl h-[600px] shadow-xl flex flex-col items-center justify-center">
    <!-- Judul Tentang Kami -->
    <h2 class="text-white text-4xl font-bold mb-8">Tentang Kami</h2>

    <!-- Bagian Visi dan Misi -->
    <div class="flex w-full justify-between px-8">
      <!-- Kolom Kiri -->
      <div class="w-1/2 px-4">
        <h3 class="text-white text-2xl font-bold text-center">Visi Kami</h3>
        <p class="text-white mt-4 text-center">Menjadi mitra terbaik bagi petani dan pengepul dalam menciptakan ekosistem pertanian yang berkelanjutan dan menguntungkan bagi semua pihak.</p>

        <h3 class="text-white text-2xl font-bold text-center mt-8">Misi Kami</h3>
        <ul class="text-white mt-4 list-disc pl-6">
          <li>Memberikan solusi digital terbaik untuk petani, pengepul, dan manajer pertanian.</li>
          <li>Meningkatkan efisiensi dalam setiap proses pertanian dan distribusi hasil pertanian.</li>
          <li>Memberikan pelatihan dan dukungan yang berkelanjutan untuk perkembangan petani dan pengepul.</li>
        </ul>
      </div>

      <!-- Kolom Kanan -->
      <div class="w-1/2 px-4">
        <h3 class="text-white text-2xl font-bold text-center">Sejarah Kami</h3>
        <p class="text-white mt-4 text-center">Kami mulai sebagai sebuah perusahaan kecil yang berfokus pada peningkatan hasil pertanian, dan sejak saat itu kami terus berkembang dengan menghadirkan teknologi yang mempermudah setiap langkah dalam proses pertanian.</p>

        <h3 class="text-white text-2xl font-bold text-center mt-8">Tim Kami</h3>
        <p class="text-white mt-4 text-center">Tim kami terdiri dari para profesional yang berpengalaman dalam bidang pertanian, teknologi, dan manajemen, yang selalu siap memberikan solusi terbaik untuk setiap tantangan yang dihadapi petani dan pengepul.</p>
      </div>
    </div>
  </div>
</div>




      </div>
    
  </template>
  
  <script setup>
  // Tidak ada script interaktif untuk saat ini
  </script>
  