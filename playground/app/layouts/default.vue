<script setup lang="ts">
const { setLayoutColorMode } = useLayoutColorMode()

onMounted(() => {
  setLayoutColorMode('light')
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
