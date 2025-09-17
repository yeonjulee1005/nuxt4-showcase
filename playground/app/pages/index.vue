<script setup lang="ts">
const { introCountUp } = storeToRefs(useShocaseStore())

useHead({
  title: 'index',
  meta: [
    { name: 'description', content: 'index Page' },
  ],
})

definePageMeta({
  layout: 'navigation',
  middleware: [
    // 'middleware',
  ],
})

const handleClick = () => {
  navigateTo('/wrong-page')
}

const changeCount = (type: 'up' | 'down') => {
  type === 'up'
    ? introCountUp.value++
    : introCountUp.value--
}
</script>

<template>
  <div class="w-[300px] h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-y-4 mx-auto">
    <ScCard
      :ui="{
        body: 'flex items-center gap-x-4',
        footer: 'flex justify-center',
      }"
    >
      <span class="text-lg font-bold">
        스토어에서 결과 확인하기!
      </span>
      <span class="text-lg font-bold">
        {{ introCountUp }}
      </span>
      <template #footer>
        <ScButtonGroup orientation="horizontal">
          <ScButton
            variant="subtle"
            label="+"
            size="xl"
            :ui="{
              base: 'min-w-20 justify-center cursor-pointer',
            }"
            @click="changeCount('up')"
          />
          <ScButton
            variant="outline"
            label="-"
            size="xl"
            :ui="{
              base: 'min-w-20 justify-center cursor-pointer',
            }"
            @click="changeCount('down')"
          />
        </ScButtonGroup>
      </template>
    </ScCard>
    <ScButton size="xl" @click="handleClick">
      잘못된 페이지 이동 해보기
    </ScButton>
  </div>
</template>

<style scoped lang="scss">
  /* Add your styles here */
</style>
