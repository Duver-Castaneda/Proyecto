<template>
  <div style="display: block" class="DivPrincipal">
    <div class="ParteArriba">
      <h1 class="Titulo">Nueva Factura de venta</h1>
      <option class="Personalizar" @click="toggleChulo">Personalizar opciones</option>
      <div v-if="IsOpen" class="dropdown-menu">
        <div class="DivOptions1"><span>Opciones Disponibles</span></div>
        <div class="DivOptions2">
          <span>Bodega</span>
          <button @click="toggleChulo1" :class="['botonChulo', { activo: estaChuleado1 }]">
            <span class="BotonChuleado"></span>
          </button>
        </div>
        <div class="DivOptions2">
          <span>Lista de precio</span>
          <button @click="toggleChulo2" :class="['botonChulo', { activo: estaChuleado2 }]">
            <span class="BotonChuleado"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="datos">
      <SDocumentTypeSelector v-model="documentType" />
      <SDropdown
        v-if="Abierto1"
        class="Bodega"
        v-model="selectedBodega"
        :label="'Bodega'"
        :options="[
          { text: 'General', code: '01' },
          { text: 'Nueva bodega', code: 'nuevo02' },
        ]"
      />

      <SModal v-model:visible="showBodegaModal" size="md">
        <template #header>
          <h3 class="TituloModal">Agregar nueva Bodega</h3>
        </template>

        <template #body>
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
              width: 100%;
            "
          >
            <div style="display: flex">
              Nombre *
              <select name="" class="BotonesModal"></select>
            </div>
            <div style="display: flex">
              Direccion <textarea name="" class="BotonesModal"></textarea>
            </div>
            <div style="display: flex">
              Observacion <textarea name="" class="BotonesModal1"></textarea>
            </div>
          </div>
        </template>

        <template #ModalFinal>
          <div class="modal-actions">
            <button class="Buton1" @click="cerrarBodegaLista()">Cancelar</button>
            <button class="Buton2">Guardar</button>
          </div>
        </template>
      </SModal>
      <SDropdown
        v-if="Abierto2"
        class="ListaPrecios"
        v-model="selectedLista"
        :label="'Lista de precios'"
        :options="[
          { text: 'General', code: '03' },
          { text: 'Nueva Lista', code: 'nuevo01' },
        ]"
      />

      <SModal v-model:visible="showListaModal" size="ml" sizeHeight="Hms">
        <template #header>
          <div class="TituloNuevo">
            <h3 class="TituloModal">Agregar nueva lista</h3>
          </div></template
        >

        <template #body>
          <div class="ContenedorNuevaLista">
            <div>
              <div class="ModalIzquierda">
                Nombre*
                <select name="" class="BotonesModal"></select>
              </div>
              <div class="ModalDerecha">
                tipo *
                <select name="" class="BotonesModal"></select>
              </div>
            </div>
            <div>Descripcion <textarea name="" class="BotonesModal1"></textarea></div>
          </div>
        </template>

        <template #ModalFinal>
          <div class="modal-actions">
            <button class="Buton1" @click="cerrarModalLista()">Cancelar</button>
            <button class="Buton2">Guardar</button>
          </div></template
        >
      </SModal>

      <SDropdown
        class="Vendedor"
        v-model="selectedVendedor"
        :label="'Vendedor'"
        :options="[
          { text: '', code: '06' },
          { text: 'Vendedor', code: '05' },
          { text: 'Nuevo vendedor', code: 'nuevo' },
        ]"
      />
      <SModal v-model:visible="showVendedorModal" size="ml">
        <template #header>
          <h3 class="TituloModal">Agregar nuevo vendedor</h3>
        </template>

        <template #body>
          <div class="ParteMed">
            <div class="Part2Modal">Nombre *<textarea class="BotonesModal"></textarea></div>
            <div class="Part2Modal">Identificación <textarea class="BotonesModal"></textarea></div>
            <div class="Part2Modal">Observación <textarea class="BotonesModal2"></textarea></div>
          </div>
        </template>

        <template #ModalFinal>
          <div class="modal-actions">
            <div style="display: flex; justify-content: space-between; width: 100%">
              <div class="Campos">Los campos marcados con * son obligatorios</div>

              <button class="Buton1" @click="cerrarModalVendedor()">Cancelar</button>
              <button class="Buton2">Guardar</button>
            </div>
          </div>
        </template>
      </SModal>
    </div>
    <div class="creandoFC">
      <SDatos1 />
      <section class="linea"></section>
      <SDatos2 />

      <div class="AgregarItems">
        <table class="Tabla">
          <thead style="background-color: #f4f5fb" class="thead">
            <tr>
              <th class="item">Item</th>
              <th class="Referencia">Referencia</th>
              <th class="Precio">Precio</th>
              <th class="Descuento">Desc %</th>
              <th class="Impuesto">Impuesto</th>
              <th class="Descripcion">Descripcion</th>
              <th class="Cantidad">Cantidad</th>
              <th class="Total">Total</th>
            </tr>
          </thead>
          <tbody>
            <STable />
            <STable />
            <STable />
            <STable v-for="(item, index) in componentes" :key="item.id" :numero="index + 1" />
          </tbody>
        </table>
        <div>
          <button class="AgregarFila" @click="agregarComponente()">+ Agregar linea</button>
        </div>
        <SFinal />
      </div>
    </div>
    <SPago />
    <h2 style="color: black">Comentarios</h2>
    <div class="comentarios">
      <textarea
        name=""
        class="textcomentarios"
        placeholder="Añadir comentarios, no se mostraran en la impresion"
      ></textarea>
    </div>
    <div class="emitir">
      <button class="Cancelar" @click="goToFormViewHome">Cancelar</button>
      <button class="VistaPrevia">Vista Previa</button>
      <button class="EmitirCrear">Emitir y crear nueva</button>
      <button class="Emitir">Emitir</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import SModal from '@/components/SModal.vue'
import SDatos2 from '@/components/SDatos2.vue'
import SDatos1 from '@/components/SDatos1.vue'
import SDocumentTypeSelector from '@/components/SDocumentTypeSelector.vue'
import SDropdown from '@/components/SDropdown.vue'
import STable from '@/components/STable.vue'
import { ref, watch } from 'vue'
import SFinal from '@/components/SFinal.vue'
import { defineProps, defineEmits } from 'vue'
import SPago from '@/components/SPago.vue'

const showVendedorModal = ref(false)
const showListaModal = ref(false)
const showBodegaModal = ref(false)

function cerrarModalVendedor() {
  showVendedorModal.value = false
}
function cerrarModalLista() {
  showListaModal.value = false
}

function cerrarBodegaLista() {
  showBodegaModal.value = false
}

const selectedVendedor = ref<string>('')
const selectedLista = ref<string>('')
const selectedBodega = ref<string>('')

watch(selectedVendedor, (nuevoValor) => {
  if (nuevoValor === 'nuevo') {
    showVendedorModal.value = true
  }
})

watch(selectedLista, (nuevoValor01) => {
  if (nuevoValor01 === 'nuevo01') {
    showListaModal.value = true
  }
})

watch(selectedBodega, (nuevoValor02) => {
  if (nuevoValor02 === 'nuevo02') {
    showBodegaModal.value = true
  }
})

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:visible'])

function close() {
  emit('update:visible', false)
}

interface ComponenteItem {
  id: number
}
// Array de componentes (reactivo y tipado)
const componentes = ref<ComponenteItem[]>([])

// Contador de IDs
let idCounter = 0

function agregarComponente() {
  componentes.value.push({ id: idCounter++ })
}

import { useRouter } from 'vue-router'
const router = useRouter()
const goToFormViewHome = () => {
  router.push({ name: 'home' })
}

type DocumentType = 'invoice' | 'saleTicket'

// Ref con tipo y valor inicial
const documentType = ref<DocumentType>('invoice')
const warehouse = ref<string>('01')
const estaChuleado1 = ref(false)
const estaChuleado2 = ref(false)
const Abierto1 = ref(false)
const Abierto2 = ref(false)
const IsOpen = ref(false)
function toggleChulo() {
  IsOpen.value = !IsOpen.value
}

function toggleChulo1() {
  estaChuleado1.value = !estaChuleado1.value
  Abierto1.value = !Abierto1.value
}
function toggleChulo2() {
  estaChuleado2.value = !estaChuleado2.value
  Abierto2.value = !Abierto2.value
}
</script>
<style scoped>
.BotonChuleado {
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.botonChulo {
  padding: 10px 10px;
  font-size: 16px;
  background-color: #eee;
  border: 2px solid #aaa;
  cursor: pointer;
  width: 4px;
  height: 4px;
}
.botonChulo.activo {
  background-color: #c7ffc7;
  border-color: #3cba3c;
  color: green;
  width: 4px;
  height: 4px;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
}
.DivOptions1 {
  padding: 16px;
}

.DivOptions2 {
  border-top: 1px solid rgb(229, 231, 235);
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 12px 20px;
  color: rgb(75, 85, 99);
  font-size: 12px;
}
.dropdown-menu {
  position: absolute;
  top: 50px;
  left: 800px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  height: 155px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  padding: 8px;
}
.botonChulo {
  padding: 10px 10px;
  font-size: 16px;
  background-color: #eee;
  border: 2px solid #aaa;
  cursor: pointer;
  width: 4px;
  height: 4px;
}
.botonChulo.activo {
  background-color: #c7ffc7;
  border-color: #3cba3c;
  color: green;
  width: 4px;
  height: 4px;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
}
.ContenedorNuevaLista {
  justify-content: space-between;
  display: flex;
}
.Campos {
  font-size: 10px;
}
.Buton2 {
  background-color: #30bbb7;
  cursor: pointer;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  width: 120px;
  height: 40px;
  color: white;
}
.Buton1 {
  width: 120px;
  height: 40px;
  cursor: pointer;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  background-color: white;
}
.BotonesModal2 {
  display: block;
  width: 210px;
  height: 70px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}
.BotonesModal {
  display: block;
  width: 210px;
  height: 30px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.BotonesModal1 {
  display: block;
  width: 210px;
  height: 100px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.ParteMed {
  padding: 20px;
}
.Part2Modal {
  display: flex;
  align-content: center;
  justify-content: flex-end;
  color: black;
}
.TituloNuevo {
  align-content: center;
}
.TituloModal {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #30bbb7;
  border-bottom: 1px solid rgb(229, 231, 235);
  height: 35px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  background: white;
  padding: 20px;
  margin: 100px auto;
  width: 460px;
  height: 310px;
  border-radius: 8px;
}

.modal01 {
  background: white;
  padding: 20px;
  margin: 100px auto;
  width: 550px;
  height: 310px;
  border-radius: 8px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.Tabla {
  table-layout: fixed;
  width: 100%;
}
.Personalizar {
  width: 220px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid rgba(151, 151, 151, 0.26);
  font-size: 16px;
  background-color: rgb(229, 231, 235);
}

.DivPrincipal {
  width: 100%;
}
.ParteArriba {
  display: flex;
  justify-content: space-between;
}

.Cancelar,
.VistaPrevia,
.EmitirCrear {
  width: 200px;
  height: 35px;
  margin: 5px;
  border: 1px solid rgba(151, 151, 151, 0.26);
  border-radius: 7px;
  cursor: pointer;
}
.Emitir {
  width: 200px;
  height: 35px;
  background-color: rgb(48, 171, 169);
  border: 1px solid rgba(151, 151, 151, 0.26);
  border-radius: 7px;
  cursor: pointer;
  color: white;
}

.emitir {
  margin-left: 150px;
  justify-content: flex-end;
  margin-bottom: 50px;
}
.textcomentarios {
  width: 100%;
  height: 70px;

  color: rgb(51, 65, 85);
  font-size: 14px;
  border: 1px solid rgb(226, 232, 240);
  border-radius: 5px;
}
.comentarios {
  background-color: white;
  padding: 40px;
  border: 1px solid rgb(226, 232, 240);
  height: 150px;
  margin-bottom: 100px;
  width: 100%;
}

body {
  background-color: rgb(229, 231, 235);
}

.datos {
  width: 100%;
  height: 86px;

  border: 1px solid rgba(151, 151, 151, 0.26);
  color: rgb(107, 114, 128);
  background-color: rgb(228, 230, 235);
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 32px;
  display: flex;
}

.Titulo {
  display: flex;
  align-content: center;
  align-items: center;
}

.TipoDocumento,
.Bodega,
.ListaPrecios,
.Vendedor {
  display: block;
  padding-right: 24px;
  padding-top: 5px;
  padding-left: 7px;
  padding-bottom: 5px;
  font-size: 11px;
  color: black;
  margin-bottom: 5px;
  border-radius: 5px;
}
.Botones {
  display: block;
  font-size: 12px;
  padding-right: 24px;
  padding-top: 5px;
  padding-left: 7px;
  padding-bottom: 5px;
  font-size: 14px;
  border: 1px solid rgba(151, 151, 151, 0.26);
  border-radius: 10px;
}
.verde {
  color: rgb(0, 177, 157);
}

.TipoDocumentoColor1 {
  display: flexbox;
  border: 1px solid rgba(151, 151, 151, 0.26);
  font-size: 16px;
  cursor: pointer;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.TipoDocumentoColor2 {
  display: flexbox;
  border: 1px solid #97979742;
  font-size: 16px;
  cursor: pointer;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.TipoDocumentoColorVerde {
  background-color: rgb(0, 177, 157);
}

.creandoFC {
  background-color: white;
  padding: 40px;
  width: 100%;
  height: 1179px;
  margin-bottom: 60px;
  height: auto;
  overflow-x: auto;
}

.linea {
  width: 850px;
  height: 10px;
  border-bottom: 1px solid rgb(229, 231, 235);
  display: block;
}

.px {
  font-size: 12px;
  display: block;
  height: 15px;
}

.AgregarFila {
  color: #30aba9;
  width: 140px;
  height: 50px;
  padding: 8px;
  border: none;
  font-size: 16px;
  background-color: white;
  border: 1px solid #30aba9;
}

.item {
  width: 10% !important;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}

.Referencia {
  width: 5%;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}

.Precio {
  width: 5%;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}
.Descuento {
  width: 3%;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}

.Impuesto {
  width: 8%;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}
.Descripcion {
  width: 10%;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}

.Cantidad {
  width: 4%;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}
.Total {
  width: 8%;
  padding-bottom: 12px;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 1px;
  text-align: left;
  height: 15px;
  font-size: 12px;
  color: #00535e;
}
</style>
<style>
body {
  background-color: rgb(229, 231, 235);
}
</style>
