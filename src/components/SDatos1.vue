<template>
  <section class="Datos1">
    <button class="logo" @click="selectedNuevoLogo = 'nuevo07'" value="nuevo07">
      <span class="textologo">utilizar mi logo</span><span class="px">178 x 51 pixeles</span>
    </button>

    <span class="nombre">Duver Stiven Castañeda</span>
    <div class="numeracion">
      No. <span class="spanNo">1</span>
      <button class="buttonConfig" @click="selectedNuevaConfig = 'nuevo06'" value="nuevo06">
        ⚙️
      </button>
      <SModal v-model:visible="showNuevoLogoModal" size="sm" sizeHeight="Hsm">
        <template #header>
          <h3 class="TituloModal">Nuevo logo</h3>
        </template>

        <template #body>
          <span class="SpanLogoCont"
            >Selecciona tu logo en formato png, jpg o jpeg para darle más estilo a tus facturas y
            tickets. El tamaño sugerido es de 178 px de ancho y 51 px de alto.</span
          >
          <div style="display: flex; margin-top: 10px">
            <span class="LogoContent">Logo * </span>
            <input
              type="file"
              ref="input"
              accept="image/*"
              @change="mostrarNombre"
              style="display: none"
            />

            <p v-if="nombreArchivo" class="BotonLogoArchivo">{{ nombreArchivo }}</p>
            <button @click="seleccionarArchivo" class="BotonLogoArchivoMostrar">Seleccionar</button>
          </div>
        </template>

        <template #ModalFinal>
          <div class="modal-actions">
            <button class="Buton2">Guardar</button>
          </div></template
        >
      </SModal>
      <SModal v-model:visible="showNuevaConfigModal" size="md">
        <template #header>
          <h3 class="TituloModal">Editar numeracion</h3>
        </template>

        <template #body>
          <div class="DatosPrimeraParte">
            <div style="justify-content: space-between; display: flex">
              <span class="fila">Nombre: </span><span class="fila2">Principal</span>
            </div>
            <div style="justify-content: space-between; display: flex">
              <span class="fila">Numeracion automatica: </span
              ><button @click="toggleChulo" :class="['botonChulo', { activo: estaChuleado }]">
                <span v-if="estaChuleado">✔</span>
                <span v-else></span>
              </button>
            </div>
            <div style="justify-content: space-between; display: flex">
              <span class="fila">Prefijo: </span><span class="fila3"></span>
            </div>
            <div style="justify-content: space-between; display: flex">
              <span class="fila">Siguiente numero: *</span><button class="fila4"></button>
            </div>
          </div>
          <div class="PieDeFactura">
            <span style="display: block">Pie de factura</span>
            <textarea
              name=""
              class="textAreaEjemplo"
              placeholder="Ejemplo: pagar en cuenta corriente 100000"
            ></textarea>
          </div>
        </template>

        <template #ModalFinal>
          <div class="modal-actions">
            <button @click="goToFormView1()" class="BotonAdmNumeraciones">
              Administrar mis numeraciones
            </button>
            <button class="Buton1" @click="cerrarModalConfig()">Cancelar</button>
            <button class="Buton2">Guardar</button>
          </div></template
        >
      </SModal>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import SModal from '@/components/SModal.vue'
const showNuevaConfigModal = ref(false)
const selectedNuevaConfig = ref<string>('')
function cerrarModalConfig() {
  showNuevaConfigModal.value = false
}
watch(selectedNuevaConfig, (nuevoValor06) => {
  if (nuevoValor06 === 'nuevo06') {
    showNuevaConfigModal.value = true
  }
})
const showNuevoLogoModal = ref(false)
const selectedNuevoLogo = ref<string>('')
function cerrarModalLogo() {
  showNuevoLogoModal.value = false
}
watch(selectedNuevoLogo, (nuevoValor07) => {
  if (nuevoValor07 === 'nuevo07') {
    showNuevoLogoModal.value = true
  }
})

const estaChuleado = ref(false)
import { useRouter } from 'vue-router'
const router1 = useRouter()
const goToFormView1 = () => {
  router1.push({ name: 'NumeracionFactura' })
}
function toggleChulo() {
  estaChuleado.value = !estaChuleado.value
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
.BotonAdmNumeraciones {
  font-size: 12px;
  background-color: white;
  border: none;
  color: rgb(0, 177, 157);
  cursor: pointer;
  text-decoration: underline;
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
.textAreaEjemplo {
  width: 100%;
  height: 50px;
  border: 1px solid rgb(203, 213, 225);
  border-radius: 5px;
}
.PieDeFactura {
  display: block;
  margin-top: 10px;
  border-top: 1px solid rgb(203, 213, 225);
  font-size: 14px;
}
.botonChulo {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #eee;
  border: 2px solid #aaa;
  cursor: pointer;
  width: 5px;
  height: 5px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}
.botonChulo.activo {
  background-color: #c7ffc7;
  border-color: #3cba3c;
  color: green;
  width: 5px;
  height: 4px;
  justify-content: flex-start;
}
.fila4 {
  display: flex;
  justify-content: flex-start; /* Alinea todo a la derecha */
  gap: 8px; /* Espacio entre elementos */
  margin-bottom: 8px;
  width: 48%;
  background-color: white;
  border: 2px solid rgb(226, 232, 240);
  border-radius: 5px;
}
.fila3 {
  display: flex;
  justify-content: flex-start; /* Alinea todo a la derecha */
  gap: 8px; /* Espacio entre elementos */
  margin-bottom: 8px;
  width: 48%;
  background-color: rgb(248, 250, 252);
  border: 2px solid rgb(226, 232, 240);
  border-radius: 5px;
}
.fila2 {
  display: flex;
  justify-content: flex-start; /* Alinea todo a la derecha */
  gap: 8px; /* Espacio entre elementos */
  margin-bottom: 8px;
  width: 48%;
}
.fila {
  display: flex;
  justify-content: flex-end; /* Alinea todo a la derecha */
  gap: 8px; /* Espacio entre elementos */
  margin-bottom: 8px;
  width: 48%;
}
.BotonesIzquierda {
  align-items: flex-end;
  justify-content: right;
}
.DatosPrimeraParte {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.TituloModal {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #30bbb7;
  border-bottom: 1px solid rgb(229, 231, 235);
  height: 35px;
}
.px {
  display: block;
}
.textologo {
  font-size: 30px;
  display: block;
}

.Datos1 {
  display: flex;
  align-content: center;
  align-items: center;
}

.logo {
  padding: 10px;
  display: block;
  text-align: center;

  cursor: pointer;
  width: 450px;
  height: 86px;
  border: 2px dashed rgb(209, 205, 205);
  color: rgb(193, 198, 206);
}

.nombre {
  display: flex;
  font-size: 24px;
  color: rgb(107, 114, 128);
  margin-left: 40px;
  height: 50px;
  margin-bottom: 50px;
}
.numeracion {
  margin-left: 100px;
  font-size: 24px;
  display: flex;
  height: 50px;
  align-items: center;
}
.spanNo {
  margin-left: 5px;
  font-size: 16px;
  padding: 8px;
  width: 140px;
  border: 1px solid rgb(229, 231, 235);
  display: flex;
  height: 45px;
  align-items: center;
  align-content: center;
}
</style>
