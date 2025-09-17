<script setup lang="ts">
const { path } = useRoute()

defineProps({
  error: Object,
})

const staticTexts = reactive({
  title: 'Error!',
  clearError: 'Clear Error (navigate to home)',
  home: 'Home',
})

const handleError = () => {
  clearError({ redirect: path })
}
</script>

<template>
  <NuxtLayout>
    <div class="h-screen flex flex-col items-center justify-center mx-4">
      <ScCard
        :ui="{
          root: 'w-full max-w-[900px]',
          header: 'text-right',
        }"
      >
        <template #header>
          <div class="text-5xl sm:text-8xl font-bold">
            {{ staticTexts.title }}
          </div>
        </template>
        <p class="text-xl sm:text-2xl font-bold">
          {{ error?.message }}
        </p>
        <template #footer>
          <div class="w-full flex justify-end gap-x-4">
            <ScButton block :ui="{ base: 'break-keep text-lg' }" @click="handleError">
              {{ staticTexts.clearError }}
            </ScButton>
            <NuxtLink
              class="flex items-center justify-center text-lg border-2 px-4 py-2 hover:border-slate-300 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition ease-in-out"
              to="/"
            >
              {{ staticTexts.home }}
            </NuxtLink>
          </div>
        </template>
      </ScCard>
    </div>
  </NuxtLayout>
</template>
