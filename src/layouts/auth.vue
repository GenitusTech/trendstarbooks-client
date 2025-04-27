<script setup lang="ts">
  defineOptions({
    name: 'LayoutsAuth',
  })
</script>

<template>
  <div class="layout-auth">
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  main {
    @apply flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-gray-400;
  }
</style>
