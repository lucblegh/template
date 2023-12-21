<script lang="ts" setup>
import { navItems, mediaItems, appLogo, appOwner } from '@/utils/app.config';

const hero = ref<HTMLDivElement>();
const { x, y } = useMouse({
  target: hero,
});
const bgPosX = computed(() => (-1 * x.value) / 30 + 'px');
const bgPosY = computed(() => (-1 * y.value) / 40 + 'px');
</script>

<template>
  <div class="hero" ref="hero">
    <div class="hero__bg"></div>

    <div class="hero__content">
      <Icon class="logo" v-if="appLogo.icon" :name="appLogo.icon" />
      <h2>{{ appOwner.name.split(' ')[0] }}</h2>
      <h3>{{ appOwner.bio }}</h3>
      <h2>{{ appOwner.name.split(' ')[1] }}</h2>
      <div class="hero__cta">
        <NuxtLink to="#contact">
          Kontakt
          <Icon name="material-symbols-light:mail-rounded" />
        </NuxtLink>
        <NuxtLink to="#services">
          Zjistit více..
          <Icon name="material-symbols:arrow-downward-alt-rounded" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.hero {
  position: relative;
  width: 100vw;
  height: 900px;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(#000, 0.2);
  background-position: top left;
  background-origin: content-box;
  overflow: hidden;

  &__bg {
    transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
    position: absolute;
    z-index: -2;
    inset: -20%;
    transform: translate(v-bind(bgPosX), v-bind(bgPosY));
    background: url('@/assets/images/hero-bg.jpg');
    background-position: center;
    background-size: cover;
  }

  &__content {
    color: white;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    user-select: none;
    position: relative;

    .logo {
      width: 10rem;
      height: 10rem;
      color: white;
      opacity: 0.6;
      filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 1));
    }

    h2 {
      font-size: 5rem;
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      opacity: 0.4;
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 1);
      pointer-events: none;
      line-height: 4.5rem;

      @include md {
        font-size: 9rem;
        font-weight: 900;
        line-height: 7.5rem;
      }
    }

    h3 {
      pointer-events: none;
      font-size: 1.75rem;
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-weight: 900;
      text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
      color: rgba(255, 255, 255, 0.6);
      line-height: 1.75rem;
      background: radial-gradient(
        circle farthest-corner at center center,
        rgba(white, 0.6) 30%,
        transparent 100%
      );

      @include md {
        font-size: 3rem;
        line-height: 3rem;
        font-weight: 900;
        background: radial-gradient(
          circle farthest-corner at center center,
          rgba(white, 0.6) 10%,
          transparent 60%
        );
      }
    }
  }

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    gap: 0.75rem;
    @include md {
      margin-left: auto;
      margin-right: auto;
      flex-direction: row;
      width: 50%;
    }

    a {
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(white, 0.3);
      background: rgba(rgb(0, 0, 0), 0.2);
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      transition: all 100ms;
      backdrop-filter: blur(2px);
      svg {
        transition: all 100ms;
        width: 1.5rem;
        height: 1.5rem;
        margin-left: 1rem;
        opacity: 0.6;
      }
      &:nth-of-type(2) {
        background: rgba(255, 255, 255, 0.1);
        color: white;
      }
      &:hover {
        opacity: 1;
        transform: translateY(-2px);
        box-shadow: 0px 6px 6px 1px rgba(0, 0, 0, 0.75);
        svg {
          opacity: 1;
          scale: 1.3;
        }
      }
    }
  }
}
</style>
