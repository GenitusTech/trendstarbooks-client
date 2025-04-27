<script setup lang="ts">
  defineOptions({
    name: 'VFormAuth',
  })
</script>

<template>
  <form
    action=""
    method="POST"
    class="space-y-6"
  >
    <div class="space-y-4">
      <slot name="fields" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
  //
</style>
