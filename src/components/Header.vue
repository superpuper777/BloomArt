<script setup lang="ts"></script>

<template>
  <header class="header">
    <nav class="header__nav">
      <RouterLink to="/" class="header__link">Home</RouterLink>
      <RouterLink to="/gallery" class="header__link">Gallery</RouterLink>
      <RouterLink to="/about" class="header__link">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header__nav {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
}

.header__link {
  text-decoration: none;
  color: #d5d2d2;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 1rem;
}

.header__link:hover {
  color: #567ba3;
}

.header__link:active {
  color: #32557a;
}
</style>
