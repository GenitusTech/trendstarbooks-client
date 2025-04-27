import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.path === '/auth' || to.path === '/auth/') {
      console.info(from)
      return navigateTo('/auth/login', { redirectCode: 308 })
    }
  },
)
