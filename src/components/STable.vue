<template>
  <tr class="Tr">
    <td class="tdInputItem">
      <select name="" class="InputTabla" v-model="selectedNuevoItem">
        <option value="" disabled selected>Buscar item Facturable</option>
        <option value="nuevo">➕ Crear nuevo ítem</option>
      </select>
      <SModal v-model:visible="showNuevoItemModal" size="lg" sizeHeight="Hlg">
        <template #header> <h3 class="TituloNuevoItem">Nuevo Item</h3></template>

        <template #body>
          <div style="display: block; margin: 5px">
            <span style="display: block; margin-bottom: 17px">INFORMACION GENERAL</span>
            <span style="display: block">Tipo de Item</span>
          </div>
          <div style="display: flex">
            <button
              @click="TipoDeItem = 'invoice'"
              :class="['BotonesGeneral', { BotonesGeneral2: TipoDeItem === 'invoice' }]"
            >
              <span>Producto</span>
            </button>
            <button
              @click="TipoDeItem = 'saleTicket'"
              :class="['BotonesGeneral', { BotonesGeneral2: TipoDeItem === 'saleTicket' }]"
            >
              <span>Servicio</span>
            </button>
            <button
              @click="TipoDeItem = 'combo'"
              :class="['BotonesGeneral', { BotonesGeneral2: TipoDeItem === 'combo' }]"
            >
              <span>Combo</span>
            </button>
          </div>
          <span style="color: rgb(112, 112, 112); font-size: 12px; margin: 10px"
            >Ten en cuenta que, una vez creado, no podrás cambiar el tipo de ítem.</span
          >
          <div class="Part1">
            <div class="Lados">Nombre * <textarea name="" class="Botones1"></textarea></div>
            <div class="Lados">
              Unidad de medida *
              <select name="" class="Botones1"></select>
            </div>
          </div>
          <div class="ModalBodega">
            Bodega *
            <select name="" class="BotonBodega">
              <option value="">Principal</option>
            </select>
          </div>
          <div class="ModalPart2">
            <div class="part2">
              Precio base * <textarea name="" class="BotonesPart2"></textarea>
            </div>
            +
            <div class="part2">
              Impuesto *
              <select name="" class="BotonesPart2"></select>
            </div>
            =
            <div class="part2">
              Precio Total * <textarea name="" class="BotonesPart2"></textarea>
            </div>
          </div>
          <div class="Part1">
            <div class="Lados">Cantidad * <textarea name="" class="Botones1"></textarea></div>
            <div class="Lados">
              Costo inicial *
              <select name="" class="Botones1"></select>
            </div>
          </div>
        </template>

        <template #ModalFinal>
          <div class="modal-actions">
            <button class="Buton1" @click="cerrarModal()">Cancelar</button>
            <button class="Buton2">Guardar</button>
          </div></template
        >
      </SModal>
    </td>
    <td><textarea name="" class="ReferenciaTd" placeholder="Referencia"></textarea></td>
    <td><textarea name="" class="ReferenciaTd" placeholder="Precio"></textarea></td>
    <td><textarea name="" class="ReferenciaTd" placeholder="%"></textarea></td>
    <td><select name="" class="ImpuestoTd" placeholder="Impuesto"></select></td>
    <td>
      <textarea name="" class="ReferenciaTd" id="Descripciontd"></textarea>
    </td>
    <td><select name="" class="CantidadTd" placeholder="Cantidad"></select></td>
    <td><textarea name="" class="ReferenciaTd" placeholder="Total"></textarea></td>
  </tr>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import SModal from './SModal.vue'

const items = ref(['Item A', 'Item B', 'Item C'])
const selected = ref('')
const nuevoItem = ref('')
const showNuevoItemModal = ref(false)
const selectedNuevoItem = ref<string>('')
function cerrarModal() {
  showNuevoItemModal.value = false
}
watch(selectedNuevoItem, (nuevoValor04) => {
  if (nuevoValor04 === 'nuevo') {
    TipoDeItem.value = '' // Reinicia al abrir
    showNuevoItemModal.value = true
  }
})

const TipoDeItem = ref<'invoice' | 'saleTicket' | 'combo' | ''>('')
</script>
<style>
.BotonesGeneral2 {
  width: 31%;
  margin: 5px;
  height: 35px;
  border-radius: 5px;
  background-color: white;
  border: 2px solid rgb(0, 177, 157);
  box-shadow: 0 0 4px rgba(0, 177, 157, 0.4);
  cursor: pointer;
}
.BotonesGeneral {
  width: 31%;
  margin: 5px;
  height: 35px;
  border-radius: 5px;
  background-color: rgb(247, 247, 247);
  border: 1px solid rgb(229, 231, 235);
  cursor: pointer;
}
.ModalGrande {
  width: 100%; /* 80% del ancho de la ventana */
}
.BodyTemplate {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 643px;
  height: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.Buton2 {
  background-color: #30bbb7;
  cursor: pointer;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  width: 120px;
  height: 45px;
}
.Buton1 {
  width: 120px;
  height: 45px;
  cursor: pointer;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
}

.part2 {
  width: 31%;
}
.BotonesPart2 {
  width: 100%;
  height: 35px;
  display: block;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
}

.ModalPart2 {
  display: flex;
  margin: 5px;
}
.BotonBodega {
  display: block;
  width: 100%;
  height: 35px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
}

.Botones1 {
  display: block;
  width: 280px;
  height: 35px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
}
.Lados {
  display: block;
}
.Part1 {
  justify-content: space-between;
  display: flex;
  margin: 5px;
}
.TituloNuevoItem {
  color: #30bbb7;
  font-size: 20px;
  border-bottom: 1px solid rgb(229, 231, 235);
  align-items: center;
  height: 40px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 643px;
  height: 70%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.modal-actions {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  border-top: 1px solid rgb(229, 231, 235);
  padding-top: 10px;
}

.Tr {
  border-bottom: 1px solid rgb(229, 231, 235);
}

.InputTabla {
  padding-bottom: 5px;
  padding-top: 5px;
  padding-left: 7px;
  padding-right: 24px;
  width: 100% !important;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}
.tdInputItem {
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 4px;
  width: 100%;
}
.thead {
  border-bottom: 1px solid green;
}

.ReferenciaTd {
  background-color: rgb(248, 250, 252);
  border: 1px solid rgb(226, 232, 240);
  border-radius: 5px;
  align-content: center;
  height: 30px;
  width: 100%;
}

#Descripciontd {
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.ImpuestoTd,
.CantidadTd {
  background-color: rgb(248, 250, 252);
  border: 1px solid rgb(226, 232, 240);
  border-radius: 5px;
  align-content: flex-start;
  height: 30px;
  width: 100%;
  margin-bottom: 5px;
}
</style>
