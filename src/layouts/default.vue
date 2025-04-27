<script setup lang="ts">
  import { CoreVFooter, CoreVHeader } from '#components'

  defineOptions({
    name: 'LayoutsDefault',
  })
</script>

<template>
  <div class="layout-default">
    <CoreVHeader />
    <main>
      <slot />
    </main>
    <CoreVFooter />
  </div>
</template>

<style lang="scss" scoped>
  main {
    @apply min-h-screen bg-blue-300;
  }
</style>
