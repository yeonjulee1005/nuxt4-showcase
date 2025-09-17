<script setup lang="ts">
const { back } = useRouter()

const { visitFileUpload, fileUploadValue } = storeToRefs(useShocaseStore())

useHead({
  title: 'blog',
  meta: [
    { name: 'description', content: 'blog Page' },
  ],
})

definePageMeta({
  layout: 'default',
  // middleware: [
  //   'middleware',
  // ],
})

onMounted(() => {
  fileUploadValue.value = null
  visitFileUpload.value++
})
</script>

<template>
  <div class="flex flex-col gap-y-4 p-4">
    <div class="flex justify-start">
      <ScButton size="xl" @click="back()">
        뒤로가기
      </ScButton>
    </div>
    <div class="w-[300px] h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-y-4 mx-auto">
      <ScFileUpload
        v-model="fileUploadValue"
        icon="i-akar-icons:cloud-upload"
        color="primary"
        size="xl"
        highlight
        label="여기에 이미지를 넣어주세요!"
        class="w-96 min-h-48"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  /* Add your styles here */
</style>
