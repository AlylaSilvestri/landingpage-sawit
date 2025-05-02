<template>
  <div class="navbar-container">
    <!-- Navbar -->
    <nav class="navbar">
      <!-- Kiri: Foto Profil dan Nama -->
      <div class="profile-container">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          class="profile-img"
        />
        <span class="profile-name">Nama Pengguna</span>
      </div>

      <!-- Kanan: Menu dan Tombol Auth -->
      <div class="menu-container">
        <!-- Menu Navigasi -->
        <ul class="nav-links">
          <li>
            <router-link to="/" class="nav-link">Menu</router-link>  <!-- Mengarah ke Dashboard (LandingPage) -->
          </li>
          <li>
            <router-link to="/landingpage2" class="nav-link">Landing Page 2</router-link>  <!-- Mengarah ke LandingPage2 -->
          </li>
          <li>
            <router-link to="/login" class="nav-link">Login</router-link>  <!-- Mengarah ke halaman login -->
          </li>
          <li>
            <router-link to="/register" class="nav-link">Register</router-link>  <!-- Mengarah ke halaman register -->
          </li>
        </ul>
        <!-- Tombol Sign In / Up -->
        <router-link to="/login">
          <button class="auth-btn">Sign In</button>
        </router-link>
        <router-link to="/register">
          <button class="auth-btn">Sign Up</button>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
// No script needed
</script>

<style scoped>
/* Animasi fade in */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar-container {
  width: 100%;
  animation: fadeInDown 0.6s ease-out;
}

.navbar {
  background-color: #134611;
  color: white;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s;
}

.profile-container:hover .profile-img {
  transform: scale(1.05);
}

.profile-name {
  font-weight: 600;
  font-size: 1.125rem;
  transition: color 0.3s;
}

.profile-container:hover .profile-name {
  color: #d1fae5;
}

.menu-container {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-link {
  font-weight: 500;
  padding-bottom: 2px;
  position: relative;
  transition: color 0.3s;
}

.nav-link::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s;
  margin-top: 2px;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #d1fae5;
}

.auth-btn {
  background-color: white;
  color: #134611;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  transition: all 0.3s;
}

.auth-btn:hover {
  transform: scale(1.05);
  background-color: #f3f4f6;
}
</style>
