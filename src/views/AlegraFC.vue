<template>
  <section class="">
    <FPart1 />
    <FPart2 />
  </section>
</template>

<script setup lang="ts">
import FPart1 from '@/components/FPart1.vue'
import FPart2 from '@/components/FPart2.vue'
import { ref } from 'vue'

import { useRouter } from 'vue-router'
const router = useRouter()
const goToFormView = () => {
  router.push({ name: 'CrearFactura' })
}

const Abierto = ref(false)

const Menu = () => {
  Abierto.value = !Abierto.value
}

const accion1 = () => {
  console.log('Acción 1 ejecutada')
}

const accion2 = () => {
  console.log('Acción 2 ejecutada')
}
</script>

<style scoped>
body {
  background-color: rgb(229, 231, 235);
}
</style>
