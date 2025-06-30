<template>
  <div>
    <label class="label"> {{ label }}</label>
    <VueSelect v-model="model" :options="options">
      <template #menu-header><slot name="before-options"></slot></template>
    </VueSelect>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import VueSelect from 'vue3-select-component'

const props = defineProps<{
  options: Array<{ text: string; code: string }>
  label: string
}>()

const model = defineModel<string>({ required: true })

const options = computed(() => {
  return props.options.map((option) => ({
    label: option.text,
    value: option.code,
  }))
})

const currentSelected = computed(() => {
  return props.options.find((option) => option.code === model.value)
})
</script>
<style scoped></style>
