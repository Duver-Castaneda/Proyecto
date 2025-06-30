<template>
  <button class="SButton" @click="emit(`click`)" :class="`SButton--${type}`">{{ label }}</button>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    type?: `primary` | `secondary` | `tertiary`
  }>(),

  {
    type: 'primary',
  },
)
const emit = defineEmits<{
  (e: `click`): void
}>()
</script>
<style scoped>
.SButton {
  width: 100%;
  height: 20px;
  background-color: white;
  border: none;
  cursor: pointer;
}

.SButton--primary {
  color: rgb(0, 177, 157);
}
</style>
