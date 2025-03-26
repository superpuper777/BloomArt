<script setup>
import Animation from "../components/Animation.vue";
</script>

<template>
  <div class="home-container">
    <!-- <Animation /> -->
    <h1>Добро пожаловать в нашу галерею!</h1>
    <p>
      Здесь вы можете просматривать изображения, загружать свои и делиться ими с
      другими.
    </p>
  </div>
</template>

<style scoped>
.home-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
</style>