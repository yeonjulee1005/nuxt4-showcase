<script setup>
import { PrismaClient } from '../../prisma/app/generated/prisma'

const prisma = new PrismaClient()
const firstUserFound = await prisma.user.findMany()
</script>

<template>
  <div>
    <p>{{ firstUserFound ?? "" }}</p>
  </div>
</template>
