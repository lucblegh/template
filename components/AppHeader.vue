<script lang="ts" setup>
import { navItems, mediaItems, appLogo } from '@/utils/app.config';
import { useMenuStore } from '@/stores/appStore';
const menuStore = useMenuStore();

const appHeaderHeight = computed(() => {
  const { y } = useWindowScroll();
  const initialHeight = 100;
  const minHeight = initialHeight / 1.5;
  const computedHeight = initialHeight - y.value / 20;
  if (computedHeight <= minHeight || menuStore.menuOpened) {
    return minHeight + 'px';
  }
  return computedHeight + 'px';
});
</script>

<template>
  <header class="header">
    <div class="header__content">
      <NuxtLink class="header__logo" to="/">
        <span>{{ appLogo.title?.split(' ')[0].split('')[0] }}</span>
        <span>{{ appLogo.title?.split(' ')[1].split('')[0] }}</span>
        <Icon v-if="appLogo.icon" :name="appLogo.icon" />
      </NuxtLink>
      <button
        @click="menuStore.toggleMenuOpened"
        class="header__hamburger"
        type="button"
      >
        <Icon :name="menuStore.menuOpened ? 'mdi:close' : 'mdi:menu'" />
      </button>
      <nav class="menu" @click="menuStore.toggleMenuOpened">
        <div class="menu__nav-items">
          <NuxtLink v-for="navItem in navItems" :to="navItem.path">
            {{ navItem.title }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
  <Transition
    enter-active-class="animate__animated animate__fadeInDown animate__faster"
    leave-active-class="animate__animated animate__fadeOutUp animate__faster"
  >
    <nav
      v-if="menuStore.menuOpened"
      class="sm-menu"
      @click="menuStore.toggleMenuOpened"
    >
      <div class="sm-menu__nav-items">
        <NuxtLink v-for="navItem in navItems" :to="navItem.path">
          {{ navItem.title }}
        </NuxtLink>
      </div>

      <div class="sm-menu__media-items">
        <NuxtLink
          v-for="mediaItem in mediaItems"
          :to="mediaItem.path"
          :style="{ color: mediaItem.color }"
        >
          <Icon :name="mediaItem.icon" />
        </NuxtLink>
      </div>
    </nav>
  </Transition>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: v-bind(appHeaderHeight);
  display: grid;
  place-items: center;
  background: white;
  box-shadow: 0 -10px 15px 0 rgba(black, 0.5);
  overflow: hidden;
  transition: height 500ms;
  & a,
  button {
    opacity: 0.6;
    transition: opacity 500ms;
    &:hover {
      opacity: 1;
    }
  }
  &__hamburger {
    font-size: 2rem;
    @include md {
      display: none;
    }
  }
  &__logo {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    @include md {
      font-size: 2rem;
    }
  }
  &__content {
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.sm-menu {
  width: 100vw;
  position: fixed;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100svh;
  min-height: 600px;
  background: rgba(black, 0.9);
  backdrop-filter: blur(10px);
  @include md {
    display: none;
  }
  &__nav-items {
    padding-top: 5rem;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    color: white;
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    a {
      padding: 1.5rem;
    }
  }
  &__media-items {
    display: flex;
    font-size: 2rem;
    gap: 2rem;
    a {
      &:hover {
        animation: heartBeat 2000ms;
      }
    }
  }
}

.menu {
  display: none;
  @include md {
    display: block;
    &__nav-items {
      display: flex;
      gap: 2rem;
      font-weight: 400;
      font-size: 1.1rem;
      font-family: 'Montserrat', sans-serif;
    }
  }
}
</style>
