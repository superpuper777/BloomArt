<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Get Inspired'.toUpperCase().split(''));
</script>

<template>
  <div class="wrap">
    <div class="letters">
      <div
        v-for="(letter, index) in name"
        :key="index"
        class="letter"
        :class="{ 'letter-space': letter === ' ' }"
        :style="{ animationDelay: `${index * 0.2}s` }">
        {{ letter }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide {
  0% {
    transform: scale(0) translateY(0);
    opacity: 1;
  }
  15% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  50% {
    transform: scale(1) translateY(300%);
    opacity: 0.2;
  }
  90% {
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(600%);
    opacity: 0;
  }
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: calc(100vh - 100px); */
}

.letters {
  display: flex;
  gap: 10px;
}

.letter {
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  background: #4b7279;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);

  transform: scale(0) translateY(0);
  animation: slide 4s ease infinite;
}

.letter-space {
  background: 0;
}
</style>
