<script setup lang="ts">
const {
  introCountUp,
  visitFileUpload,
  visitTable,
  visitColorPicker,
  colorPickerValue,
  fileUploadValue,
} = storeToRefs(useShocaseStore())

useHead({
  title: 'blog',
  meta: [
    { name: 'description', content: 'blog Page' },
  ],
})

definePageMeta({
  layout: 'navigation',
  middleware: [
    'require',
  ],
})

const filePreviewUrl = computed(() => {
  if (fileUploadValue.value && fileUploadValue.value.type.startsWith('image/')) {
    return URL.createObjectURL(fileUploadValue.value)
  }
  return null
})

const getFileIcon = (fileType: string) => {
  if (!fileType) return 'heroicons:document'
  if (fileType.startsWith('image/')) return 'heroicons:photo'
  if (fileType === 'application/pdf') return 'heroicons:document-text'
  if (fileType.includes('excel') || fileType.includes('spreadsheet')) return 'heroicons:table-cells'
  if (fileType.includes('word') || fileType.includes('document')) return 'heroicons:document'
  if (fileType.includes('powerpoint') || fileType.includes('presentation')) return 'heroicons:presentation-chart-bar'
  if (fileType.includes('zip') || fileType.includes('rar')) return 'heroicons:archive-box'
  if (fileType.includes('video/')) return 'heroicons:video-camera'
  if (fileType.includes('audio/')) return 'heroicons:musical-note'
  return 'heroicons:document'
}

onUnmounted(() => {
  if (filePreviewUrl.value) {
    URL.revokeObjectURL(filePreviewUrl.value)
  }
})

console.log(fileUploadValue.value)
</script>

<template>
  <div class="w-[400px] h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-y-4 mx-auto">
    <ScCard :ui="{ body: 'flex flex-col gap-2.5' }">
      <p class="flex items-center gap-x-2">
        <span class="font-bold">
          홈화면 카운트 수:
        </span>
        <span>
          {{ introCountUp }}
        </span>
      </p>
      <p class="flex items-center gap-x-2">
        <span class="font-bold">
          파일 업로드 페이지 방문 수:
        </span>
        <span>
          {{ visitFileUpload }}
        </span>
      </p>
      <p class="flex items-center gap-x-2">
        <span class="font-bold">
          테이블 페이지 방문 수:
        </span>
        <span>
          {{ visitTable }}
        </span>
      </p>
      <p class="flex items-center gap-x-2">
        <span class="font-bold">
          컬러 피커 페이지 방문 수:
        </span>
        <span>
          {{ visitColorPicker }}
        </span>
      </p>
      <div class="flex flex-col items-start gap-y-2">
        <span class="font-bold">
          파일 업로드 정보:
        </span>
        <div v-if="fileUploadValue" class="flex flex-col gap-y-2">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            파일명: {{ fileUploadValue.name }}
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            크기: {{ Math.round(fileUploadValue.size / 1024) }} KB
          </p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            타입: {{ fileUploadValue.type }}
          </p>
          <div v-if="fileUploadValue.type.startsWith('image/')" class="mt-2">
            <NuxtImg
              :src="filePreviewUrl || ''"
              :alt="fileUploadValue.name"
              class="max-w-48 max-h-48 object-contain border border-gray-300 dark:border-gray-600 rounded"
            />
          </div>
          <ScCard
            v-else
            :ui="{ root: 'bg-gray-50 dark:bg-gray-800 rounded-lg', body: 'flex items-center gap-3 p-2 sm:p-3' }"
          >
            <Icon
              :name="getFileIcon(fileUploadValue.type)"
              class="w-8 h-8 text-blue-500"
            />
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
                {{ fileUploadValue.name }}
              </span>
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {{ fileUploadValue.type }}
              </span>
            </div>
          </ScCard>
        </div>
        <p v-else class="text-gray-500 dark:text-gray-400">
          업로드된 파일이 없습니다.
        </p>
      </div>
      <p class="flex flex-col items-start gap-x-4">
        <span class="font-bold">
          Color Picker 값:
        </span>
        <span :style="{ color: colorPickerValue }">
          {{ colorPickerValue }}
        </span>
      </p>
    </ScCard>
  </div>
</template>

<style scoped lang="scss">
  /* Add your styles here */
</style>
