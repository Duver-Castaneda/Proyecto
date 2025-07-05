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
    <SContainerDatosFactura />

    <div class="Inventory">
      <div class="ContainersInventory">
        <div class="DivsInventory1"><span class="Lista">Lista de precios</span><span></span></div>
        <div class="DivsInventory"><span>Bodega</span><span></span></div>
      </div>
      <div class="ContainersInventory">
        <span class="SpanArchivosInicial">Adjuntar archivos</span>
        <button class="ButtonArchivos" @click="ArchivoModal()">
          <span class="SpanArchivos">Adjuntar archivos</span
          ><span class="SpanArchivosTamaño">Tamaño maximo 10mb</span>
        </button>

        <SModal v-model:visible="showNuevoArchivoModal" size="sm" sizeHeight="Hmsm">
          <template #header>
            <h3 class="TituloModal">Adjuntar Archivo</h3>
          </template>

          <template #body>
            <div style="display: flex; margin-top: 10px">
              <span class="LogoContent">Seleccionar archivo * </span>
              <input
                type="file"
                ref="input"
                accept="image/*"
                @change="mostrarArchivo"
                style="display: none"
              />

              <p v-if="nombreArchivo" class="BotonLogoArchivo">{{ nombreArchivo }}</p>
              <button @click="seleccionarArchivo" class="BotonLogoArchivoMostrar">
                Seleccionar
              </button>
            </div>
          </template>

          <template #ModalFinal>
            <div class="modal-actions">
              <button class="Buton2">Guardar</button>
            </div></template
          >
        </SModal>
      </div>
    </div>
    <div class="Pagos">
      <div style="display: flex">
        <div class="PagosButton">
          <button
            @click="TipoDeItem = 'Pagos'"
            :class="['BotonesGeneral', { BotonesGeneral2: TipoDeItem === 'Pagos' }]"
          >
            <span>Pagos recibidos</span>
          </button>
        </div>
        <div class="PagosButton">
          <button
            @click="TipoDeItem = 'Contabilidad'"
            :class="['BotonesGeneral', { BotonesGeneral2: TipoDeItem === 'Contabilidad' }]"
          >
            <span>Contabilidad</span>
          </button>
        </div>
      </div>

      <div class="PagosElegido" v-if="TipoDeItem === 'Pagos'">
        <div class="ContainerPagoE">
          <div class="DivContainerPago"></div>
          <div class="DivContainerPago">
            <span class="SpanPagoE">Tu venta aun no tiene pagos recibidos</span>
          </div>
          <div class="DivContainerPago">
            <button class="ButtonPagoE">+ Agregar Pago</button>
          </div>
        </div>
      </div>

      <div class="ContabilidadE" v-if="TipoDeItem === 'Contabilidad'">
        <div class="ContabilidadPart1">
          <div><span>Asiento contable FV-2</span></div>
          <div>
            <span>Fecha: {{ store.Creacion }}</span>
          </div>
        </div>
        <button class="ContImprimir">Imprimir</button>
        <div style="display: block; margin-top: 12px; background-color: rgb(238, 252, 255)">
          <span class="SpanVisualizacion"
            >Visualiza el movimiento contable de este comprobante. Puedes personalizar las cuentas
            contables y sus códigos aquí.</span
          >
        </div>
        <table style="width: 100%; padding: 16px">
          <thead>
            <tr>
              <th class="TbContabilidad" style="width: 10%">Tercero</th>
              <th class="TbContabilidad" style="width: 10%">Codigo</th>
              <th class="TbContabilidad" style="width: 30%">Cuenta contable</th>
              <th class="TbContabilidad" style="width: 25%">Centro de costo</th>
              <th class="TbContabilidad" style="width: 12%">Debito</th>
              <th class="TbContabilidad" style="width: 12%">Credito</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
    <h2 class="TituloComentarios">Comentarios</h2>
    <div class="Comentarios">
      <div class="ContainerComent">
        <textarea
          class="ComentariosContent"
          style="padding: 10px"
          placeholder="Añade comentarios, no se mostraran en la impresion"
        >
        </textarea>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useInputStore } from '@/stores/inputstore'
import SContainerDatosFactura from '@/components/SContainerDatosFactura.vue'
import { ref, watch } from 'vue'
import SModal from '@/components/SModal.vue'
let showNuevoArchivoModal = ref(false)

function ArchivoModal() {
  showNuevoArchivoModal.value = !showNuevoArchivoModal.value
}

const input = ref(null)
const nombreArchivo = ref('')

function seleccionarArchivo() {
  input.value.click()
}

function mostrarArchivo(e) {
  const archivo = e.target.files[0]
  if (archivo) {
    nombreArchivo.value = archivo.name
  }
}

const store = useInputStore()

const TipoDeItem = ref<'Pagos' | 'Contabilidad' | ''>('')
</script>
<style scoped>
.Lista {
  width: 100%;
  border-bottom: 1px solid rgb(229, 231, 235);
}
.ComentariosContent {
  width: 100%;
  height: 100%;
  border: 1px solid rgb(229, 231, 235);
  color: rgb(51, 65, 85);
}
.ContainerComent {
  width: 100%;
  height: 100%;
  padding: 16px 24px 16px 24px;
}
.Comentarios {
  width: 100%;
  height: 210px;
  padding: 16px 0px 16px 0px;
  background-color: white;
}
.TituloComentarios {
  color: black;
  margin: 3px;
}
.TbContabilidad {
  background-color: rgb(243, 245, 247);
}
.SpanVisualizacion {
  padding: 10px 15px 10px 25px;
  display: block;
  color: rgb(40, 102, 123);
  font-size: 12px;
}
.ContImprimir {
  background-color: white;
  padding: 5px 15px 5px 15px;
  width: 100px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  cursor: pointer;
  border-radius: 8px;
}
.ContabilidadPart1 {
  display: flex;
  justify-content: space-between;
}
.ContabilidadE {
  padding: 25px 17px 25px 17px;
  width: 100%;
  height: 80%;
}
.ButtonPagoE {
  display: block;
  padding: 8px 20px 8px 20px;
  height: 44px;
  width: 150px;
  background-color: white;
  border: 1px solid rgba(148, 163, 184, 0.4);
  border-radius: 10px;
  cursor: pointer;
}
.SpanPagoE {
  color: rgb(144, 144, 154);
  font-size: 16px;
}
.DivContainerPago {
  width: 30%;
  height: 100%;
  display: flex;

  align-items: center;
}
.ContainerPagoE {
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  justify-content: space-between;
}
.PagosElegido {
  padding: 25px 17px 25px 17px;
  height: 80%;
}
.PagosButton {
  padding: 8px 20px 8px 20px;
  display: flex;
}
.BotonesGeneral2 {
  width: 121px;
  margin: 5px;
  height: 35px;
  border-radius: 5px;
  background-color: white;
  border-bottom: 2px solid rgb(0, 177, 157);
  box-shadow: 0 0 4px rgba(0, 177, 157, 0.4);
  cursor: pointer;
}
.BotonesGeneral {
  width: 121px;
  margin: 5px;
  height: 35px;
  border-radius: 5px;

  cursor: pointer;
}
.Pagos {
  width: 100%;
  height: 258px;
  background-color: white;
  margin-top: 20px;
  padding: 8px 16px 16px 16px;
}
.SpanArchivosInicial {
  padding-bottom: 8px;
  color: rgb(107, 114, 128);
}
.SpanArchivosTamaño {
  color: rgb(107, 114, 128);
  display: block;
  font-size: 9.6px;
}
.SpanArchivos {
  display: block;
  color: rgb(107, 114, 128);
  font-size: 20px;
}

.BotonLogoArchivoMostrar {
  width: 30%;
  max-height: 30px;
  font-size: 14px;
  border: 1px solid rgb(203, 213, 225);
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(241, 245, 249);

  border-left: none;
}
.BotonLogoArchivo {
  width: 55%;
  max-height: 30px;
  font-size: 14px;
  border: 1px solid rgb(203, 213, 225);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
  line-height: 30px;
  border-radius: 5px;
  border-right: none;
}

.TituloModal {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #30bbb7;
  border-bottom: 1px solid rgb(229, 231, 235);
  height: 35px;
}
.ButtonArchivos {
  display: block;
  padding: 24px 100px 24px 100px;
  width: 100%;
  height: 80%;
  padding: 10px;
  display: block;
  text-align: center;

  cursor: pointer;
  background-color: rgb(249, 250, 253);
  border: 2px dashed rgb(209, 205, 205);
  color: rgb(193, 198, 206);
}
.DivsInventory {
  display: flex;
  justify-content: space-between;
}

.DivsInventory1 {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid (229, 231, 235);
}
.ContainersInventory {
  width: 45%;
  height: 196px;
  background-color: white;
  padding: 24px 40px 24px 40px;
}
.Inventory {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
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
