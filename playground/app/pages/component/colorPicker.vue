<script setup lang="ts">
const { visitColorPicker, colorPickerValue } = storeToRefs(useShocaseStore())

useHead({
  title: 'blog',
  meta: [
    { name: 'description', content: 'blog Page' },
  ],
})

definePageMeta({
  layout: 'default',
})

onMounted(() => {
  visitColorPicker.value++
})
</script>

<template>
  <NuxtUi>
    <template #component>
      <ScColorPicker
        v-model="colorPickerValue"
        format="lab"
      />
    </template>
  </NuxtUi>
</template>
