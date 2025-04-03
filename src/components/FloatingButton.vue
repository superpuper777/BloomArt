<script setup lang="ts">
import type { PropType } from 'vue';

 const props = defineProps({
  openModal: {
    type: Function as PropType<(event: MouseEvent) => void>,
    required: true
  }
});
</script>

<template>
    <div>
        <button class="floating-button" @click="props.openModal">+</button>
    </div>
  </template>
  
  <style scoped>
  .floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--vt-c-main-yellow-soft);
    color: white;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .floating-button:hover {
    background-color: var(--vt-c-main-yellow);
  }

  .floating-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--vt-c-main-yellow-mute);
  }
  </style>