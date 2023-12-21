// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@pinia/nuxt', '@vueuse/nuxt', '@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: [100, 400, 900],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use 'scss-reset/reset';
            @use '~/assets/styles/_colors.scss' as *;
            @use '~/assets/styles/_breakpoints.scss' as *;
          `,
        },
      },
    },
  },
});
