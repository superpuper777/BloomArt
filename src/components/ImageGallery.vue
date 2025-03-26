<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const images = ref([]);
const fetchImages = async () => {
      try {
        const response = await axios.get(`${apiUrl}/images`);
        if (response.data && response.data.images) {
          images.value = response.data.images;
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    const getImageUrl = (path) => {
      return `${apiUrl}/${path.replace(/\\/g, '/')}`;
    };

    onMounted(() => {
      fetchImages();
    });
</script>

<template>
    <div class="image-gallery">
    <div v-if="images.length > 0" class="images-container">
      <div v-for="image in images" :key="image.id" class="image-item">
        <img :src="getImageUrl(image.path)" :alt="image.filename" />
      </div>
    </div>
    <div v-else>
      <p>No images</p>
    </div>
  </div>
</template>

<style scoped>
.image-gallery{
  padding: 20px 0;
}
.images-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.image-item {
  cursor: pointer;
  overflow: hidden;
}

.image-item img {
  max-width: 100%;
  height: 300px; 
  object-fit: cover;
}
</style>