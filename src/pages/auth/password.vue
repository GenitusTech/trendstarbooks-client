<script setup lang="ts">
  import VFormAuth from '~/components/forms/VFormAuth.vue'
  import VInput from '~/components/inputs/VInput.vue'

  defineOptions({
    name: 'PageAuthPassword',
  })
  definePageMeta({
    layout: 'auth',
  })
  const action: string = ''
  const callback: string = ''
</script>

<template>
  <div>
    <VFormAuth
      :action="action"
      :callback="callback"
    >
      <template #fields>
        <VInput
          id-input="auth-password-email"
          label="Email"
          type="email"
        />
      </template>
    </VFormAuth>
  </div>
</template>

<style lang="scss" scoped>
  //
</style>
