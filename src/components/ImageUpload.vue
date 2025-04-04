<script setup lang="ts">
import { ref, inject } from "vue";
import axios from "axios";

const closeModal = inject<(() => void) | undefined>("close"); 

const fileName = ref<string>("");
const fileInput = ref<HTMLInputElement | null>(null);

const apiUrl = import.meta.env.VITE_API_URL;

const uploadImage = async () => {
  const file = fileInput.value?.files?.[0];
  if (file) {
    console.log("Uploading file:", file.name);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `${apiUrl}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded:", response.data);

      if (response.data) {
        closeModal?.();
      }

    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }
};

const handleFileChange = () => {
  const file = fileInput.value?.files?.[0];
  if (file) {
    fileName.value = file.name;
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="uploadImage" class="form">
      <label class="custum-file-upload" for="fileInput">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
            fill-rule="evenodd" clip-rule="evenodd"
          />
        </svg>
        </div>
        <div class="text">
          <span>Click to upload image</span>
        </div>
        <input
          type="file"
          id="fileInput"
          ref="fileInput"
          class="file-input"
          @change="handleFileChange"
        />
      </label>

      <div v-if="fileName">
        <p>
          File selected: <span class="file-name">{{ fileName }}</span>
        </p>
      </div>

      <button type="submit" class="submit-button">Upload</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.custum-file-upload {
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #849c97;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0, 0, 0, 0.1);
}

.custum-file-upload .icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .icon svg {
  height: 80px;
  fill: var(--color-text);
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 400;
  color: var(--color-text);
}

.file-name {
  font-weight: bold;
  color: var(--vt-c-main-green);
}

.file-input {
  display: none;
}

.custum-file-upload input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.submit-button {
  background-color: var(--vt-c-main-green-soft);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: var(--vt-c-main-green);
}

.submit-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(40, 159, 167, 0.25);
}
</style>