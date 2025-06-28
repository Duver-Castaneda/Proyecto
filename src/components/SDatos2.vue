<template>
  <div class="Datos2">
    <div class="columna1">
      <div class="firstcolumn">
        <div class="inputcontainer">
          <span class="spanDocumento">Documento*</span>
          <select name="" class="inputcont">
            <option value="">CC</option>
            <option value="">NIT</option>
            <option value="">NIT de otro pais</option>
            <option value="">PP</option>
            <option value="">PEP</option>
            <option value="">DIE</option>
            <option value="">CE</option>
            <option value="">TE</option>
            <option value="">TI</option>
            <option value="">RC</option>
            <option value="">NUPT</option>
            <option value="">PPT</option>
          </select>

          <textarea name="" id="BuscarId" placeholder="Buscar N° de ID"></textarea>
        </div>
        <div class="containerName">
          <span class="SpanNombre">Nombre o razon social *</span>
          <textarea id="texto" rows="4" cols="30" placeholder="Seleccionar Cliente"></textarea>
        </div>
        <div class="divcorreo">
          <span class="spanCorreo">correo * </span><textarea name="" id="correoInput"></textarea>
        </div>
        <button
          class="BotonContactoAgregar"
          @click="selectedNuevoContacto = 'nuevo04'"
          value="nuevo04"
        >
          + Agregar contacto
        </button>
        <SModal v-model:visible="showNuevoContactoModal" sizeHeight="Hlg">
          <template #header>
            <h3 class="TituloModal">Nuevo Contacto</h3>
          </template>

          <template #body>
            <div class="PrimeraParte">
              <div class="PrimerBoton">
                <button class="PrimerBoton1">Cliente</button>
              </div>
              <div class="SegundoBoton">
                <button class="SegundoBoton2">Proveedor</button>
              </div>
            </div>
            <div class="SegundaParte">
              <button class="TercerBoton">
                <span style="display: block">Crear Mediante Archivo</span
                ><span style="display: block; color: rgb(100, 116, 139); margin: 10px"
                  >Suelta aqui tu archivo PNG, JPG o PDF (max 5 mgb)</span
                >
              </button>
            </div>
            <div class="TerceraParte">
              <span style="display: block">Tipo de Identificación</span>
              <select name="" class="Select1"></select>
              <span style="display: block">Numero de Identificacion </span>
            </div>

            <div class="CuartaParte">
              <div class="BotonIdentificacion1">
                <button class="Identificacion1"></button>
              </div>
              <div class="BotonIdentificacion2">
                <button class="Identificacion2">Autocompletar</button>
              </div>
            </div>

            <div class="ParteFinal">
              <div class="firstcolumn1">
                <span>Nombres*</span><textarea class="BotonesParteFinal"></textarea>
                <span style="display: block">Municipio / Departamento</span
                ><textarea class="BotonesParteFinal"></textarea>
                <span style="display: block">Correo Electronico</span
                ><textarea class="BotonesParteFinal" placeholder="@ejemplo@gmail.com"></textarea>
              </div>
              <div class="secondcolumn2">
                <span style="display: block">Apellidos *</span
                ><textarea class="BotonesParteFinal"></textarea>
                <span style="display: block">Direccion</span
                ><textarea class="BotonesParteFinal"></textarea>
                <span style="display: block">Telefono</span
                ><textarea class="BotonesParteFinal"></textarea>
              </div>
            </div>
          </template>

          <template #ModalFinal>
            <div class="modal-actions">
              <button class="Buton1" @click="cerrarModalContacto()">Cancelar</button>
              <button class="Buton2">Guardar</button>
            </div></template
          >
        </SModal>
      </div>
    </div>
    <div class="columna2">
      <div class="secondcolumn">
        <div class="fecha">
          <span class="spanFecha"> Fecha </span>
          <input type="date" class="fechas" name="fecha" />
        </div>
        <div class="formaDePago">
          <span class="spanFormaDePago">Forma de pago *</span>
          <select name="" class="botonesDatos">
            <option value="">Contado</option>
            <option value="">Creedito</option>
          </select>
        </div>
        <div class="MedioDePago">
          <span class="spanPago">Medio de pago *</span>
          <textarea name="" class="botonesDatos" placeholder="Seleccionar"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SDropdown from '@/components/SDropdown.vue'
import { ref, watch } from 'vue'
import SModal from '@/components/SModal.vue'
import { defineProps, defineEmits } from 'vue'

const showNuevoContactoModal = ref(false)
const selectedNuevoContacto = ref<string>('')
function cerrarModalContacto() {
  showNuevoContactoModal.value = false
}
watch(selectedNuevoContacto, (nuevoValor04) => {
  if (nuevoValor04 === 'nuevo04') {
    showNuevoContactoModal.value = true
  }
})
const warehouse = ref<string>('01')
</script>
<style scoped>
.modal-actions {
  width: 100%;
}
.buton1,
.buton2 {
  width: 48%;
}
.BotonesParteFinal {
  display: block;
  width: 100%;
  border: 2px solid rgb(229, 231, 235);
  background-color: white;
  height: 40px;
  border-radius: 10px;
  margin-top: 3px;
  margin-bottom: 20px;
  align-content: center;
}

.firstcolumn1 {
  display: block;
  width: 49%;
}

.secondcolumn2 {
  display: block;
  width: 49%;
}
.ParteFinal {
  display: flex;

  justify-content: space-between;
  color: black;
}

.Identificacion1 {
  width: 100%;
  height: 35px;
  border: 1px solid rgb(229, 231, 235);
  background-color: white;
  border-radius: 10px;
}
.Identificacion2 {
  width: 100%;
  height: 35px;
  border: 1px solid rgb(229, 231, 235);
  color: rgb(26, 126, 127);
  border-radius: 10px;
  background-color: rgb(207, 242, 241);
}
.BotonIdentificacion1 {
  width: 73%;
  display: flex;
}
.BotonIdentificacion2 {
  width: 23%;
  display: flex;
}
.CuartaParte {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.TituloModal {
  border-bottom: 1px solid rgb(229, 231, 235);
  padding-bottom: 5px;
}
.Select1 {
  width: 100%;
  height: 35px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 10px;
  margin-bottom: 10px;
}
.TercerBoton {
  display: block;
  width: 100%;
  height: 140px;
  border: 1px solid rgb(229, 231, 235);
  background-color: rgb(248, 250, 252);
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 10px;
}
.PrimerBoton1 {
  width: 100%;
  height: 35px;
  border-radius: 10px;
  background-color: rgb(207, 242, 241);
  border: none;
  text-align: left;
  cursor: pointer;
}
.SegundoBoton2 {
  width: 100%;
  height: 35px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid rgb(229, 231, 235);
  text-align: left;
  cursor: pointer;
}

.PrimerBoton {
  width: 45%;
}
.SegundoBoton {
  width: 45%;
}
.PrimeraParte {
  justify-content: space-between;
  display: flex;
  margin: 10px;
}

.BotonContactoAgregar {
  display: flex;
  align-content: flex-end;
  background-color: white;
  color: #30bbb7;
  border: none;
  cursor: pointer;
}
.firstcolumn {
  font-size: 16px;
  display: block;
  align-content: center;
  align-items: center;
  margin-top: 20px;
}

.secondcolumn {
  display: block;
  margin-top: 20px;
}

.inputcontainer {
  display: flex;
  align-content: center;
  align-items: center;
}
.containerName {
  display: block;
  align-items: center;
  align-content: center;
  justify-content: flex-start; /* 👈 alinea arriba */
}
#texto {
  width: 52%;
  height: 30px;
  border-radius: 7px;
  border: 1px solid rgb(229, 231, 235);
}
.inputcont {
  border-radius: 5px;
  width: 60px;

  align-content: center;
  text-align: center;
  border: 1px solid rgb(229, 231, 235);
  height: 28px;
  display: flex;
}
#correoInput {
  width: 52%;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 5px;
  height: 28px;
}
#BuscarId {
  border-radius: 5px;
  width: 38%;

  align-content: center;
  text-align: center;
  border: 1px solid rgb(229, 231, 235);
  height: 28px;
  display: flex;
}
.botonesDatos {
  width: 200px;
  height: 28px;
  align-content: center;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 5px;
}
.datos2 {
  display: flex;
}

.columna1,
.columna2 {
  display: flex;
}
.Datos2 {
  justify-content: space-between;
  display: flex;
  margin-bottom: 35px;
}

.formaDePago,
.MedioDePago,
.inputcontainer,
.containerName,
.divcorreo,
.fecha {
  display: flex;
  margin: 3px;
}

.spanDocumento,
.SpanNombre,
.spanCorreo {
  width: 200px;
}
.spanFecha,
.spanPago,
.spanFormaDePago {
  width: 145px;
}
.fechas {
  width: 200px;
  height: 28px;
  align-content: center;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 5px;
}
</style>
