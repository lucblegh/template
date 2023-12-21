import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuStore', () => {
  const menuOpened = ref<boolean>(false);
  function toggleMenuOpened() {
    menuOpened.value = !menuOpened.value;
  }
  return { menuOpened, toggleMenuOpened };
});
