<script setup>
import { ref, provide } from 'vue';

import Modal from '../components/Modal.vue'
import ImageUpload from '../components/ImageUpload.vue';
import ImageGallery from '../components/ImageGallery.vue';
import FloatingButton from '../components/FloatingButton.vue';

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};


provide('close', closeModal);


</script>

<template>
  <div class="gallery-container">
    <Modal v-if="showModal" title="Upload file">
      <ImageUpload />
    </Modal>
    <ImageGallery />
    <FloatingButton :openModal="openModal" />
  </div>
</template>

