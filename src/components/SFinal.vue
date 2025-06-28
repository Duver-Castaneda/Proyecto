<template>
  <SRemision v-for="(item, index) in componentesRemision" :key="item.id" :numero="index + 1" />
  <div style="margin-top: 100px">
    <div style="justify-content: space-between; display: flex">
      <div><span></span></div>
      <div>
        <button class="BotonEmisionAgregar" @click="agregarComponenteRemision">
          + Agregar remision
        </button>
      </div>
    </div>

    <div style="justify-content: space-between; display: flex" class="Final">
      <div class="logo">
        <button class="textoFirma" @click="selectedNuevaFirma = 'nuevo08'" value="nuevo08">
          utilizar mi firma <span style="display: block; font-size: 12px">178 x 51px</span>
        </button>
        <SModal v-model:visible="showNuevaFirmaModal" size="sm" sizeHeight="Hsm">
          <template #header>
            <h3 class="TituloModal">Nueva Firma</h3>
          </template>

          <template #body>
            <div class="bodymodal">
              <span class="SpanLogoCont"
                >Para que tu firma se vea bien, la imagen debe tener 178 pixeles de ancho y 51
                pixeles de alto, y su tamaño no debe superar los 10 MB</span
              >
              <div style="display: flex; margin-top: 10px">
                <span class="LogoContent">Firma * </span>
                <input
                  type="file"
                  ref="input"
                  accept="image/*"
                  @change="mostrarNombre"
                  style="display: none"
                />

                <p v-if="nombreArchivo" class="BotonLogoArchivo">{{ nombreArchivo }}</p>
                <button @click="seleccionarArchivo" class="BotonLogoArchivoMostrar">
                  Seleccionar
                </button>
              </div>
            </div>
          </template>

          <template #ModalFinal>
            <div class="modal-actions">
              <button class="Buton2">Guardar</button>
            </div></template
          >
        </SModal>
      </div>
      <div style="justify-content:"></div>
      <div class="tabla">
        <table>
          <tbody>
            <tr>
              <td class="title">Subtotal</td>
              <td class="title">$ 0</td>
            </tr>
            <tr>
              <td class="title">Descuento</td>
              <td class="title">-$ 0</td>
            </tr>
            <tr>
              <td class="Total">TOTAL</td>
              <td class="Total">$ 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="Final2">
    <div class="part1">
      <span class="TermsYconds">Terminos y condiciones</span>
      <span class="Terminos"
        >Esta factura se asimila en todos sus efectos a una letra de cambio de conformidad con el
        Art. 774 del código de comercio. Autorizo que en caso de incumplimiento de esta obligación
        sea reportado a las centrales de riesgo, se cobraran intereses por mora.</span
      >
    </div>
    <div class="part2">
      <span class="Notas">Notas</span>
      <textarea name="" class="NotasTxT"></textarea>
    </div>
  </div>
  <div class="Final3">
    <span class="PieDe">Pie de Factura</span>
    <span class="PieDeFC">visible en la impresion del documento </span>
  </div>
</template>
<script setup lang="ts">
import SRemision from './SRemision.vue'
import { ref, watch } from 'vue'
import SModal from './SModal.vue'

const showNuevaFirmaModal = ref(false)
const selectedNuevaFirma = ref<string>('')
function cerrarModalLogo() {
  showNuevaFirmaModal.value = false
}
watch(selectedNuevaFirma, (nuevoValor08) => {
  if (nuevoValor08 === 'nuevo08') {
    showNuevaFirmaModal.value = true
  }
})

interface ComponenteRemisionItem {
  id: number
}
// Array de componentes (reactivo y tipado)
const componentesRemision = ref<ComponenteRemisionItem[]>([])

// Contador de IDs
let idCounter = 0
function agregarComponenteRemision() {
  componentesRemision.value.push({ id: idCounter++ })
}

const input = ref(null)
const nombreArchivo = ref('')

function seleccionarArchivo() {
  input.value.click()
}

function mostrarNombre(e) {
  const archivo = e.target.files[0]
  if (archivo) {
    nombreArchivo.value = archivo.name
  }
}
</script>
<style scoped>
.bodymodal {
  padding: 5px;
}
.TituloModal {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #30bbb7;
  border-bottom: 1px solid rgb(229, 231, 235);
  height: 35px;
}
.BotonAdmNumeraciones {
  font-size: 12px;
  background-color: white;
  border: none;
  color: rgb(0, 177, 157);
  cursor: pointer;
}
.buttonConfig {
  width: 30px;
  height: 30px;
  background-color: white;
  margin-right: 5px;
  border: none;
  cursor: pointer;
}
.LogoContent {
  font-size: 14px;
  align-items: center;
}
.BotonLogoArchivoMostrar {
  width: 30%;
  height: 30px;
  padding-left: 15px;
  padding-right: 15px;
  padding: 5px;
  max-height: 40px;
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
  overflow: hidden; /* lo que se sale del alto no se ve */
  white-space: nowrap; /* que no haga salto de línea */
  text-overflow: clip; /* o ellipsis si querés puntos suspensivos */
  line-height: 30px; /* centrar texto si es de una línea */
  border-radius: 5px;
  border-right: none;
}
.SpanLogoCont {
  display: block;
  font-size: 12px;
  color: rgb(107, 114, 128);
}

.Final {
  display: flex;
}
.textoFirma {
  font-size: 30px;
  align-items: center;
  background-color: rgb(249, 250, 253);
  padding: 10px;
  display: block;
  text-align: center;
  height: 80px;
  cursor: pointer;
  width: 300px;
  border: 2px dashed rgb(209, 205, 205);
  color: rgb(193, 198, 206);
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 16px;
  color: rgb(51, 65, 85);
  width: 100px;
}
.Total {
  font-size: 24px;
  padding: 0px;
  border-top: 1px solid rgb(229, 231, 235);
  color: rgb(51, 65, 85);
  width: 50px;
}
.Terminos {
  display: block;
  border: 1px solid rgb(203, 213, 225);
  padding: 6px;
  color: rgb(51, 65, 85);
  width: 100%;
  border-radius: 5px;
}

.Final2 {
  margin-top: 30px;
  justify-content: space-between;
  display: flex;
}

.TermsYconds,
.Notas {
  color: rgb(51, 65, 85);
  width: 70%;
  display: flex;
}

.NotasTxT {
  display: block;
  height: 88px;
  border: 1px solid rgb(203, 213, 225);
  width: 100%;
  padding: 6px;
  border-radius: 5px;
}
.part1 {
  display: block;
  width: 100%;
}
.part2 {
  display: block;
  width: 50%;
}
.part2 {
  margin-left: 40px;
}

.PieDe {
  color: #cbd5e1;
  font-size: 14px;
}

.PieDeFC {
  background-color: #f8fafc;
  width: 100%;
  border: 1px solid rgb(248, 250, 252);
  display: block;
  color: rgb(226, 232, 240);
  border-radius: 5px;

  padding: 6px;
  height: 83px;
}

.Final3 {
  display: block;
  margin-top: 30px;
}
td {
  width: 50px;
}

.BotonEmisionAgregar {
  display: flex;
  align-content: flex-end;
  background-color: white;
  color: #30bbb7;
  border: none;
  cursor: pointer;
  margin: 5px;
  margin-right: 50px;
  font-size: 16px;
  margin-bottom: 15px;
}
</style>
