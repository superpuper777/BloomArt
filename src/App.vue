<script setup>
import { ref, provide } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import FloatingButton from './components/FloatingButton.vue';
import Modal from './components/Modal.vue'
import ImageUpload from './components/ImageUpload.vue';

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
  <div class="page-container">
    <Header />
    <main class="content">
      <RouterView />
      <Modal v-if="showModal" title="Upload file">
        <ImageUpload/>
      </Modal>
    </main>
    <Footer />
    <FloatingButton :openModal="openModal"/>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  overflow: hidden;
}
footer {
  margin-top: auto;
}
</style>
