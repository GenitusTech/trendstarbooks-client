import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: {
    enabled: import.meta.env.DEV,
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_trendbooksstar/',
    rootAttrs: {
      id: '__trendbooksstar',
    },
    rootId: '__trendbooksstar',
  },

  css: ['~/assets/scss/main.scss'],
  srcDir: './src/',

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  vite: {
    build: {
      assetsDir: '_trendbooksstar/',
    },
  },

  telemetry: {
    enabled: false,
  },

  modules: ['@nuxt/eslint'],

  eslint: {
    //
  },
})
