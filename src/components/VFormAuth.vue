<script setup lang="ts">
//
</script>

<template>
    <div>
        <form method="POST">
            <slot></slot>
            <button type="submit">VALIDATE</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
form {
    @apply bg-red-400;
}
</style>