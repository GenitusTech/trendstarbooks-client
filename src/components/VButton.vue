<script setup lang="ts">
  defineOptions({
    name: 'VButton',
  })
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: () => 'button',
    },
  })
  const { text, type } = props
</script>

<template>
  <div>
    <button :type="type">
      {{ text }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
  //
</style>
