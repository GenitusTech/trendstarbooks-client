// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: {
    enabled: import.meta.env.DEV,
  },
  srcDir: './src/',
  compatibilityDate: '2024-11-01',
  typescript: {
    strict: true,
    typeCheck: true,
  },
  telemetry: {
    enabled: false,
  },
  eslint: {
    config: {
      stylistic: true,
      formatters: true,
      typescript: true,
    },
  },
})
