<template>
  <div class="div1">
    <h1 class="Titulo2">Facturas de venta</h1>
    <div>
      <select
        list="Mis acciones"
        id="Acciones"
        name="Acciones"
        class="acciones"
        v-model="selectedExportar"
      >
        <option disabled selected value="">Mis acciones</option>
        <option value="Tiquete">Crear Tiquete POS</option>
        <option value="nuevo09" class="verde">Exportar</option>
      </select>
      <SModal v-model:visible="showExportarModal" size="md" sizeHeight="Hsm">
        <template #header>
          <h3 class="TituloModal">Exportar Facturas</h3>
        </template>

        <template #body>
          <div class="ContenedorPadre">
            <div><select name="" class="SelectExp"></select></div>
            <div class="divExp">
              <span class="SpanExp">Desde * </span>
              <input type="date" class="fechas" name="fecha" />
            </div>
            <div class="divExp">
              <span class="SpanExp">Hasta * </span>
              <input type="date" class="fechas" name="fecha" />
            </div></div
        ></template>

        <template #ModalFinal>
          <div class="modal-actions">
            <button class="Buton1">Exportar todo</button>
            <button class="Buton2">Exportar</button>
          </div>
        </template>
      </SModal>

      <button @click="goToFormView" class="CrearFactura-boton">+ Crear Factura</button>
    </div>
  </div>
  <p class="Titulo2" style="color: black">
    Crea, edita y gestiona facturas detalladas para tus transacciones comerciales.
  </p>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToFormView = () => {
  router.push({ name: 'CrearFactura' })
}
import { ref, watch } from 'vue'
import SModal from './SModal.vue'

const showExportarModal = ref(false)
const selectedExportar = ref<string>('')
function cerrarModalLogo() {
  showExportarModal.value = false
}
watch(selectedExportar, (nuevoValor09) => {
  if (nuevoValor09 === 'nuevo09') {
    showExportarModal.value = true
  }
})
</script>
<style scoped>
.modal-actions {
  padding-top: 7.5px;
}
.Buton1 {
  width: 120px;
  height: 35px;
  background-color: white;
  border: 1px solid rgb(203, 213, 225);
  padding: 6px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: flex-start;
}
.Buton2 {
  width: 120px;
  height: 35px;
  background-color: rgb(48, 171, 169);
  border: 1px solid rgb(203, 213, 225);
  color: white;
  padding: 6px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: flex-start;
}
.SelectExp {
  width: 100%;
  height: 30px;
  border: 1px solid rgb(203, 213, 225);
  border-radius: 8px;
  margin-bottom: 6px;
}
.divExp {
  justify-content: space-between;
  display: flex;
  margin: 2px;
}
.ContenedorPadre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 15px;
  padding-bottom: 10px;
}
.fechas {
  border: 1px solid rgb(203, 213, 225);
  width: 200px;
  height: 30px;
  justify-content: center;
  border-radius: 8px;
}
.SpanExp {
  color: rgb(51, 65, 85);
  font-size: 14px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  justify-content: center;
}
.Titulo2 {
  margin-bottom: 15px;
  color: black;
  display: flex;
}

.TituloModal {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #30bbb7;
  border-bottom: 1px solid rgb(229, 231, 235);
  height: 35px;
}

.CrearFactura-boton {
  width: 200px;
  height: 40px;
  display: flexbox;
  justify-content: center;
  align-items: center;
  background-color: #30aba9;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  margin-left: 5px;
  border: none;
}

.acciones {
  height: 40px;
  display: flexbox;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;
  color: black;
  cursor: pointer;
}
.div1 {
  display: flex;
  justify-content: space-between;
}
</style>
