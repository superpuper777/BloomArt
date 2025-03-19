<script setup>
 const props = defineProps({
  openModal: {
    type: Function,
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
    background-color: #278071;
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
    background-color: #0c5c4f;
  }

  .floating-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(40, 159, 167, 0.25);
  }
  </style>