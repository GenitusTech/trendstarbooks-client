<script setup lang="ts">
  defineOptions({
    name: 'VInput',
  })
  const props = defineProps({
    idInput: {
      type: String,
      default: () => '',
    },
    label: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      default: () => '',
    },
  })
  const { label, idInput, type } = props
</script>

<template>
  <div class="space-y-2">
    <label :for="idInput">{{ label }}</label>
    <div class="relative">
      <i />
      <input
        :id="idInput"
        name=""
        :type="type"
        placeholder=""
        value=""
        required
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
  // label {
  // }
  // input {
  // }
</style>
