<template>
  <div class="Principal">
    <h2 style="color: black; font-weight: bold">Nueva Numeracion</h2>
    <span style="color: rgb(51, 65, 85); margin-top: 10px"
      >Crea una numeración para organizar y tener el control de tus documentos.</span
    >
    <div class="Contenido">
      <div class="ContenidoSupra">
        <div>
          <span class="SpanSupra1">Configuracion General</span
          ><span class="SpanSupra2">Agrega los datos principales de tu numeración</span>
        </div>
        <div style="display: flex">
          <span class="Preferida">Preferida </span>
          <div class="switch" onclick="this.classList.toggle('activo')">
            <div class="bola"></div>
          </div>
        </div>
      </div>
      <div class="Contenido1">
        <div class="Columna1">
          <div class="divsContenido1">
            <span class="Nombres">Tipo de Documento</span
            ><select name="" class="Botones"></select>
          </div>
          <div class="divsContenido1">
            <span class="Nombres">Nombre</span
            ><textarea
              name=""
              class="Botones"
              placeholder="Escribe un nombre para identificar esta num"
            ></textarea>
          </div>
          <div class="divsContenido1">
            <span class="Nombres">Prefijo</span><textarea name="" class="Botones"></textarea>
          </div>
          <div class="divsContenido1" v-if="EsVisible2">
            <span class="Nombres">Desde el numero</span
            ><textarea name="" class="Botones"></textarea>
          </div>
          <div v-if="isHidden" class="Principal1">
            <div class="divsContenido3">
              <span class="Nombres">Desde el numero</span
              ><textarea name="" class="Botones"></textarea>
            </div>
            <div class="divsContenido3">
              <span class="Nombres">Hasta el numero</span
              ><textarea name="" class="Botones"></textarea>
            </div>
          </div>
        </div>
        <div class="Columna2">
          <div class="divsContenido5">
            <button @click="toggleChulo" :class="['botonChulo', { activo: estaChuleado }]">
              <span class="BotonChuleado" v-if="estaChuleado">✔</span></button
            ><span class="Nombres">Numeracion automatica</span>
          </div>
          <div class="divsContenido1" v-if="EsVisible">
            <span class="Nombres">Proxima Factura</span
            ><textarea name="" class="Botones"></textarea>
          </div>

          <div class="divsContenido1">
            <span class="Nombres">Resolucion</span
            ><textarea
              name=""
              class="Botones2"
              placeholder="Ejemplo: Resolucion facturacion por computador N°. 22000002222 de 2015/01/01 Rango del 1 al 100"
            ></textarea>
          </div>

          <div></div>
        </div>
      </div>
    </div>
    <div class="ParteInferior">
      <div><span>Los campos marcados con * son obligatorios</span></div>
      <div>
        <button class="BotonCancelar">Cancelar</button>
        <button class="BotonGuardar">Guardar</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
const estaChuleado = ref(false)
const EsVisible = ref(false)
const EsVisible2 = ref(true)
const isHidden = ref(false)
function toggleChulo() {
  estaChuleado.value = !estaChuleado.value
  EsVisible.value = !EsVisible.value
  isHidden.value = !isHidden.value
  EsVisible2.value = !EsVisible2.value
}
</script>
<style scoped>
.Principal1 {
  display: flex;
  justify-content: space-between;
}
.BotonChuleado {
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.switch {
  background-color: rgb(229, 231, 235);
  width: 38px;
  height: 20px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background 0.3s;
  margin-left: 10px;
}
.switch .bola {
  background-color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: left 0.3s;
}
.switch.activo {
  background-color: rgb(48, 187, 183);
}
.switch.activo .bola {
  left: 20px;
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
.ParteInferior {
  justify-content: space-between;
  display: flex;
  margin-top: 20px;
  align-items: center;
}
.BotonCancelar {
  width: 120px;
  height: 38px;
  padding: 8px;
  background-color: white;
  color: rgb(41, 158, 156);
  margin: 5px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 5px;
}

.BotonGuardar {
  width: 120px;
  height: 38px;
  padding: 8px;
  background-color: rgb(41, 158, 156);
  color: white;
  margin: 5px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 5px;
}
.divsContenido1 {
  margin-top: 5px;
  margin-bottom: 5px;
}

.divsContenido3 {
  margin-top: 5px;
  margin-bottom: 5px;

  width: 48%;
}

.divsContenido5 {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 15px;
  display: flex;
  padding: 5px;
}
.Botones {
  width: 100%;
  height: 40px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 5px;
  font-size: 16px;
  color: rgb(112, 112, 112);
}
.Botones2 {
  width: 100%;
  height: 80px;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 5px;
  font-size: 16px;
  color: rgb(112, 112, 112);
}
.Nombres {
  color: rgb(112, 112, 112);
  font-size: 14px;
  display: block;
}
.Preferida {
  color: rgb(71, 83, 107);
}
.SpanSupra2 {
  display: block;
  font-size: 14px;
  color: rgb(71, 83, 107);
}
.SpanSupra1 {
  display: block;
  font-size: 16px;
}
.ContenidoSupra {
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
}
.Columna1 {
  width: 47%;
}
.Columna2 {
  width: 47%;
}
.Contenido1 {
  justify-content: space-between;
  display: flex;
  margin-top: 20px;
}
.Contenido {
  width: 100%;
  height: 400px;
  background-color: white;
  margin-top: 30px;
  padding: 40px;
  display: block;
}
.Principal {
  width: 900px;
  height: 600px;
}
</style>
