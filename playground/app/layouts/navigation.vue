<script setup lang="ts">
import type { Database } from '~/types/supabase'
import type { NavigationMenuItem, NavigationMenuChildItem } from '@nuxt/ui'

const { setLayoutColorMode } = useLayoutColorMode()

onMounted(() => {
  setLayoutColorMode('dark')
})

const childrenMenu = ref<NavigationMenuChildItem[]>([
  {
    label: '파일 업로일',
    icon: 'i-akar-icons:cloud-upload',
    description: 'Nuxt UI V3에 새롭게 생긴 컴포넌트 입니다.',
    to: '/component/fileUpload',
  },
  {
    label: '테이블',
    icon: 'i-lucide-table',
    description: 'Nuxt UI에서 제공되는 테이블 컴포넌트는 사실 Reka UI Wrapper 컴포넌트 입니다.',
    to: '/component/table',
  },
  {
    label: 'Color Picker',
    icon: 'i-lucide-palette',
    description: 'Nuxt UI에서 제공되는 컬러 피커 컴포넌트 입니다.',
    to: '/component/colorPicker',
  },
])

const { data: menuList, execute: _executeMenuList } = useAsyncData('menuList', async () => {
  const menuList: NavigationMenuItem[][] = [
    [
      {
        label: 'GitHub',
        icon: 'i-simple-icons-github',
        badge: '듀듀 깃헙',
        to: 'https://github.com/yeonjulee1005',
        target: '_blank',
      },
    ],
  ]

  const { data: response } = await useFetch('/api/menu', {
    method: 'GET',
    query: {
      schema: 'menu',
      tableName: 'showcaseMenu',
    },
    transform: (data: Database['menu']['Tables']['showcaseMenu']['Row'][]) => {
      return data.map((item) => {
        if (item.has_children) {
          return {
            label: item.label,
            icon: item.icon,
            children: childrenMenu.value,
          }
        }

        return item
      })
    },
    immediate: true,
  })

  if (!response.value) {
    throw createError({
      statusCode: 501,
      statusMessage: 'Menu data not found',
    })
  }

  menuList.unshift(response.value as NavigationMenuItem[])

  return menuList
})
</script>

<template>
  <div class="flex flex-col gap-y-4 py-2 px-4">
    <ScNavigationMenu
      highlight
      highlight-color="primary"
      orientation="horizontal"
      :items="menuList"
      class="data-[orientation=horizontal]:border-b border-default data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-48"
      :ui="{
        viewportWrapper: 'max-w-120',
      }"
    />
    <!-- /* Add your layout Architecture here */ -->
    <slot />
  </div>
</template>
