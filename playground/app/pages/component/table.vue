<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const { visitTable } = storeToRefs(useShocaseStore())

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
  visitTable.value++
})

type Payment = {
  id: string
  date: string
  email: string
  amount: number
}

const data = ref<Payment[]>([
  {
    id: '4600',
    date: '2025-09-27 15:30:00',
    email: 'dewdew@dewdew.world',
    amount: 594,
  },
  {
    id: '4599',
    date: '2025-09-27 10:10:00',
    email: 'noreply@dewdew.world',
    amount: 276,
  },
  {
    id: '4598',
    date: '2025-09-27 08:50:00',
    email: 'contact@dewdew.world',
    amount: 315,
  },
  {
    id: '4597',
    date: '2025-09-27 19:45:00',
    email: 'support@dewdew.world',
    amount: 529,
  },
])

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`,
  },
  {
    accessorKey: 'date',
    header: '날짜',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    },
  },
  {
    accessorKey: 'email',
    header: '이메일',
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, '금액'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'KRW',
      }).format(amount)
      return h('div', { class: 'text-right font-medium' }, formatted)
    },
  },
]
</script>

<template>
  <NuxtUi>
    <template #component>
      <ScTable
        ref="table"
        :data="data"
        :columns="columns"
      />
    </template>
  </NuxtUi>
</template>
