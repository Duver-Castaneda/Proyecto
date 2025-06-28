<template>
  <div class="s-document-type">
    <span> Tipo de documento</span>
    <div>
      <button
        @click="documentType = 'invoice'"
        :class="[
          's-document-type__button',
          { 's-document-type__button--selected': documentType === 'invoice' },
        ]"
      >
        <span>Factura de venta</span>
      </button>
      <button
        @click="documentType = 'saleTicket'"
        :class="[
          's-document-type__button',
          { 's-document-type__button--selected': documentType === 'saleTicket' },
        ]"
      >
        <span>tiquete</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const documentType = defineModel<'invoice' | 'saleTicket'>({ required: true })
</script>

<style lang="css" scoped>
.s-document-type {
  display: block;
  padding-right: 24px;
  padding-top: 5px;
  padding-left: 7px;
  padding-bottom: 5px;
  font-size: 11px;
  color: black;
  margin-bottom: 5px;
}
.s-document-type__button {
  display: flexbox;
  border: 1px solid rgba(151, 151, 151, 0.26);
  font-size: 16px;
  cursor: pointer;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.s-document-type__button--selected {
  background-color: rgb(48, 171, 169);
}
</style>
