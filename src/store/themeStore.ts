import { defineStore } from 'pinia';
import { useLocalStorage } from '@/utils/storage';


interface ThemeState {
  theme: 'light' | 'dark';
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => {
    const { getItem } = useLocalStorage<'light' | 'dark'>('theme', 'light');
    return {
      theme: getItem(),
    };
  },
  actions: {
    toggleTheme(): void {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      const { setItem } = useLocalStorage<'light' | 'dark'>('theme', 'light');
      setItem(this.theme)
      document.documentElement.setAttribute('data-theme', this.theme);
    },
  },
});
