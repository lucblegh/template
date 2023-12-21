<script lang="ts" setup>
const props = defineProps({
  name: String,
  side: {
    type: String,
    default: 'left' || 'right',
  },
});
</script>

<template>
  <section class="section">
    <h3 class="section__heading">{{ props.name }}</h3>
    <main class="section__content">
      <slot />
    </main>
  </section>
</template>

<style lang="scss">
.section {
  min-height: 100svh;
}
</style>
