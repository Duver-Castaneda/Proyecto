<template>
  <div style="display: block; width: 1024px">
    <h1 class="Titulo">Factura de venta</h1>

    <div class="ParteOpciones">
      <button class="Buttons" style="width: 100px">Editar</button
      ><button class="Buttons" style="width: 114px">Imprimir</button
      ><button class="Buttons" style="width: 160px">Descargar PDF</button
      ><button class="Buttons" style="width: 120px">Compartir</button
      ><button class="Buttons" style="width: 150px">+ Agregar pago</button
      ><button class="Buttons" style="width: 125px">Mis acciones</button>
      <select name="" id="" class="selectActions">
        <option value="">clonar</option>
        <option value="">volver recurrente</option>
        <option value="">Editar retenciones</option>
        <option value="">Anular</option>
        <option value="">Cerrar sin pago</option>
        <option value="">Aplicar nota de credito</option>
        <option value="">Aplicar nota de debito</option>
        <option value="">Adjuntar archivos</option>
      </select>
    </div>
    <div class="Valores">
      <div class="ValoresElegidos">
        <span class="SpanTexto">Valor total</span><span class="Span3">${{ store.inputValue }}</span>
      </div>
      <div class="ValoresElegidos">
        <span class="SpanTexto">Retenido</span><span class="Span1">$0</span>
      </div>
      <div class="ValoresElegidos">
        <span class="SpanTexto">Cobrado</span><span class="Span2">$0</span>
      </div>
      <div class="ValoresElegidos">
        <span class="SpanTexto">Por cobrar</span><span class="Span1">${{ store.inputValue }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useInputStore } from '@/stores/inputstore'

const store = useInputStore()
</script>
<style scoped>
.selectActions {
  width: 20px;
  height: 32px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  border-radius: 5px;
}
.SpanTexto {
  color: rgb(107, 114, 128);
  font-size: 13px;
}
.Span1 {
  color: red;
  font-size: 20px;
  display: block;
}
.Span2 {
  color: rgb(0, 195, 173);
  font-size: 20px;
  display: block;
}
.Span3 {
  color: rgb(88, 88, 96);
  font-size: 20px;
  display: block;
}
.ValoresElegidos {
  display: block;
  padding-left: 16px;
  width: 250px;
  border-right: 1px solid rgb(244, 244, 244);
}
.Valores {
  width: 100%;
  height: 103px;
  padding: 9px 16px 14px 0px;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
.Titulo {
  color: black;
  display: block;
}
.ParteOpciones {
  margin: 20px 0px 24px 0px;
  display: flex;
  width: 70%;
  justify-content: space-between;
}
.Buttons {
  background-color: white;
  border: 1px solid rgba(148, 163, 184, 0.4);
  border-radius: 7px;
  height: 32px;
  padding: 5px 15px 5px 15px;
  color: rgb(15, 23, 42);
  cursor: pointer;
  margin: 1px;
}
</style>
