<script setup>
import { usePrismaClient } from '@prisma/nuxt'

const prisma = usePrismaClient()
const firstUserFound = await prisma.user.findMany()
</script>

<template>
  <div>
    <p>{{ firstUserFound ?? "" }}</p>
  </div>
</template>
