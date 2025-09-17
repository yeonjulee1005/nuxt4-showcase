<script setup lang="ts">
const appConfig = useAppConfig()

// 전체 웹사이트의 헤드 설정
useHead({
  title: 'Nuxt 쇼케아스',
  titleTemplate: '',
  link: [],
  meta: [],
})

// 페이지별 SEO 설정
useSeoMeta({})
</script>

<template>
  <ScApp :toaster="appConfig.toaster">
    <NuxtLayout>
      <RouterView />
    </NuxtLayout>
  </ScApp>
</template>
