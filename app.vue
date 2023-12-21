<script lang="ts" setup>
import 'animate.css';

useSeoMeta({
  title: 'LB Portfolio',
  description: 'Luc Blegh Portfolio website.',
});
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
  </div>
</template>

<style lang="scss" src="@/assets/styles/main.scss"></style>
