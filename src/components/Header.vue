<script setup>
import { ref } from "vue";
import { useThemeStore } from "@/store/themeStore";

const themeStore = useThemeStore();
const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <RouterLink to="/" class="header__link">Home</RouterLink>
      <RouterLink to="/gallery" class="header__link">Gallery</RouterLink>
      <RouterLink to="/about" class="header__link">About</RouterLink>
    </nav>
    <div class="theme-toggle-container">
      <button
        @click="toggleTheme"
        class="theme-toggle__button"
        :class="{
          light: themeStore.theme === 'light',
          dark: themeStore.theme === 'dark',
        }"
      >
        <img
          v-show="themeStore.theme === 'light'"
          class="theme-icon"
          src="@/assets/dark_theme_flower.svg"
          alt="light_theme"
          width="24"
          height="24"
        />
        <img
          v-show="themeStore.theme === 'dark'"
          class="theme-icon"
          src="@/assets/light_theme_flower.svg"
          alt="dark_theme"
          width="24"
          height="24"
        />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__nav {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
}

.header__link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 1.2rem;
}

.header__link:hover {
  color:  var(--vt-c-main-yellow-soft);
}

.header__link:active {
  color: var(--vt-c-main-yellow);
}

.theme-toggle__button {
  cursor: pointer;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
}

.theme-toggle__button.light {
  background: #bbbdc5;
}

.theme-toggle__button.dark {
  background: #727479;
}
</style>
