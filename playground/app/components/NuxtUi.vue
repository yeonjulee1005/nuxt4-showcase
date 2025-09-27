<script setup lang="ts">
const { back } = useRouter()
</script>

<template>
  <div class="flex flex-col gap-y-4 p-4">
    <div class="flex justify-start">
      <ScButton size="xl" @click="back()">
        뒤로가기
      </ScButton>
    </div>
    <div class="w-[300px] h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-y-4 mx-auto">
      <slot name="component" />
    </div>
  </div>
</template>
