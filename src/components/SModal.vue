<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div :class="['modal-content', sizeClass, sizeHeightClass]">
      <header class="modal-header">
        <slot name="header">Sin título</slot>
        <button class="close-button" @click="close">&times;</button>
      </header>
      <section class="modal-body">
        <slot name="body" class="Medio"></slot>
      </section>
      <footer class="modal-Final">
        <slot name="ModalFinal"></slot>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:visible'])

function close() {
  emit('update:visible', false)
}

import { computed } from 'vue'

type ModalSize = 'sm' | 'md' | 'ml' | 'lg'
type ModalSizeHeight = 'Hmsm' | 'Hsm' | 'Hmd' | 'Hml' | 'Hlg' | 'Hms'

const props = defineProps<{
  sizeHeight?: ModalSizeHeight
  size?: ModalSize
  visible: Boolean
}>()

const sizeClass = computed(() => {
  const sizeMap: Record<ModalSize, string> = {
    sm: 'modal-sm',
    md: 'modal-md',
    ml: 'modal-ml',
    lg: 'modal-lg',
  }
  return sizeMap[props.size || 'lg']
})

const sizeHeightClass = computed(() => {
  const sizeHeightMap: Record<ModalSizeHeight, string> = {
    Hmsm: 'modal-Hmsm',
    Hsm: 'modal-Hsm',
    Hms: 'modal-Hms',
    Hmd: 'modal-Hmd',
    Hml: 'modal-Hml',
    Hlg: 'modal-Hlg',
  }
  return sizeHeightMap[props.sizeHeight || 'Hmd']
})

// Computed: Clase según tamaño
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal-content {
  background: white;
  margin: 100px auto;
  padding: 20px;

  height: 370px;
  border-radius: 10px;
}
.close-button {
  float: right;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.Medio {
  margin: 5px;
  margin-bottom: 10px;
}
.modal-body {
  margin: 5px;

  max-height: 250px;
  overflow-y: auto;
}

.modal-sm {
  width: 380px;
}
.modal-md {
  width: 400px;
}
.modal-ml {
  width: 500px;
}
.modal-lg {
  width: 600px;
}

.modal-Hmsm {
  height: 220px;
}

.modal-Hsm {
  height: 250px;
}
.modal-Hms {
  height: 300px;
}
.modal-Hmd {
  height: 350px;
}
.modal-Hml {
  height: 400px;
}
.modal-Hlg {
  height: 425px;
}
</style>
