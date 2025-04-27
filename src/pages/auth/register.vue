<script setup lang="ts">
  import VFormAuth from '~/components/forms/VFormAuth.vue'
  import VInput from '~/components/inputs/VInput.vue'

  defineOptions({
    name: 'PageAuthRegister',
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
          id-input="auth-register-email"
          label="Email"
          type="email"
        />
        <VInput
          id-input="auth-register-password"
          label="Password"
          type="password"
        />
        <VInput
          id-input="auth-register-password-confirm"
          label="Password Confirmation"
          type="password"
        />
      </template>
    </VFormAuth>
  </div>
</template>

<style lang="scss" scoped>
  //
</style>
