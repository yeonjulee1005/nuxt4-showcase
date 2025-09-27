<script setup lang="ts">
useHead({
  title: 'blog',
  meta: [
    { name: 'description', content: 'blog Page' },
  ],
})

definePageMeta({
  layout: 'navigation',
})
</script>

<template>
  <div class="w-[300px] h-[calc(100vh-100px)] flex flex-col items-center justify-center gap-y-4 mx-auto">
    <NuxtImg
      src="/images/dewdew_world.webp"
      alt="blog-image"
      width="200"
      height="200"
      class="object-cover rounded-lg"
    />
    <NuxtLink
      to="https://dewdew.world"
      external
      target="_blank"
      class="hover:text-emerald-500 transition-colors duration-200 ease-in-out"
    >
      Dewdew World
    </NuxtLink>
  </div>
</template>
