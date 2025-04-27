import type { RouteLocationNormalized } from 'vue-router'

function isAuthenticated(): boolean {
  return false
}

export default defineNuxtRouteMiddleware(
  (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (isAuthenticated() === false) {
      console.info(to, from)
      return navigateTo('/auth/login')
    }
  },
)
