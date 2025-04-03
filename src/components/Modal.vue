<script setup lang="ts">
import { inject } from 'vue';

const closeModal = inject<(() => void) | undefined>('close');
const props = defineProps(['title'])
</script>

<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>{{props.title}}</h2>
      <slot></slot>
      <button @click="closeModal" class="button-close">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="close-icon">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  position: relative;
  background-color: var(--modal-box-background);
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  box-shadow: var(--modal-box-shadow);
}

.button-close {
 background: inherit;
  border: none;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.3s ease;
}

.button-close:hover {
  opacity: 0.7;
}

.close-icon {
  width: 24px;
  height: 24px;
  color: var(--color-icon);
}
</style>