import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  typescript: {
    strict: true,
    typeCheck: true,
  },
  devtools: {
    enabled: import.meta.dev,
    vueDevTools: import.meta.dev
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/_tsb/',
    rootAttrs: {
      id: '__tsb'
    },
  },
  router: {
    options: {}
  },
  routeRules: {
    '/auth': { redirect: '/auth/login' }
  },
  srcDir: './src',
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],
  css: [
    '~/assets/scss/main.scss',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  telemetry: { enabled: false },
})