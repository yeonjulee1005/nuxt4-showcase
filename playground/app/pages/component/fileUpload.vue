<script setup lang="ts">
const { visitFileUpload, fileUploadValue } = storeToRefs(useShocaseStore())

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
  fileUploadValue.value = null
  visitFileUpload.value++
})
</script>

<template>
  <NuxtUi>
    <template #component>
      <ScFileUpload
        v-model="fileUploadValue"
        icon="i-akar-icons:cloud-upload"
        color="primary"
        size="xl"
        highlight
        label="여기에 이미지를 넣어주세요!"
        class="w-96 min-h-48"
      />
    </template>
  </NuxtUi>
</template>
