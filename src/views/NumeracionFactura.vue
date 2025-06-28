<template>
  <div class="Principal">
    <div style="justify-content: space-between; display: flex">
      <div>
        <span class="TituloNumeraciones">Numeraciones de documentos</span
        ><span class="DescripcionNumeraciones"
          >Administra las numeraciones de los documentos que generas en tu negocio</span
        >
        <span class="TipoDocumento">Tipo de documento</span>
        <select name="" class="TipoDocumentoBoton"></select>
      </div>
      <div>
        <button class="BotonNuevaNumeracion" @click="goToFormView2()">+ Nueva numeracion</button>
      </div>
    </div>
    <div class="SuperiorTabla"><button class="boton1">filtrar</button></div>
    <div>
      <div class="TablaUltimaParte">
        <table style="width: 100%; border-collapse: collapse; width: 100%">
          <thead class="thead" style="background-color: rgb(241, 245, 249)">
            <div style="background-color: rgb(241, 245, 249)">
              <tr style="border: 1px solid rgb(229, 231, 235)">
                <th class="Valor">Nombre</th>
                <th class="Valor">Preferida</th>
                <th class="Valor">Electronica</th>
                <th class="Valor">Resolucion</th>
                <th class="Valor">Prefijo</th>
                <th class="Valor">Siguiente numero</th>
                <th class="Valor">Acciones</th>
              </tr>
            </div>
          </thead>
          <tbody>
            <tr style="border: 1px solid rgb(229, 231, 235)">
              <td class="Valor2">Principal</td>
              <td class="Valor2">Si</td>
              <td class="Valor2">No</td>
              <td class="Valor2"></td>
              <td class="Valor2"></td>
              <td class="Valor2">1</td>
              <td class="Valor2"></td>
            </tr>
          </tbody>
        </table>
        <div class="UltimaParteDiv">
          <div>
            <button class="BotonesInferior"></button><button class="BotonesInferior"></button
            ><span>| Pagina 1 de 1 |</span><button class="BotonesInferior"></button
            ><button class="BotonesInferior"></button>
          </div>
          <div>
            <span>Mostrando 1-1 de 1 | Resultados por pagina</span
            ><select name="" class="selectResultados">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router2 = useRouter()
const goToFormView2 = () => {
  router2.push({ name: 'NumeracionFacturaAdd' })
}
</script>
<style scoped>
.selectResultados {
  width: 50px;
  height: 20px;
  margin: 3px;
  cursor: default;
  border: 1px solid rgb(229, 231, 235);
  background-color: white;
}
.BotonesInferior {
  width: 20px;
  height: 20px;
  margin: 3px;
  cursor: default;
  border: 1px solid rgb(229, 231, 235);
  background-color: white;
}
.Principal {
  margin-bottom: 400px;
}
.UltimaParteDiv {
  background-color: rgb(248, 250, 252);
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin-top: 320px;
  width: 100%;
  align-items: center;
}
table {
  width: 100%;
}
.TablaUltimaParte {
  width: 100%;
  height: 450px;
  background-color: white;
  border: 1px solid rgb(229, 231, 235);
}
.Valor2 {
  background-color: white;
  padding-left: 10px;
  border: none;
  font-size: 12px;
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.Valor {
  width: 14.2%;
  background-color: rgb(241, 245, 249);
  padding: 5px;
  color: rgb(41, 158, 156);
  font-size: 12px;
  border: none;
  padding: 8px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.boton1 {
  width: 50px;
  height: 70%;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(212, 212, 212);
  color: rgb(41, 158, 156);
  justify-content: flex-end;
  display: flex;
  margin-top: 2px;
}
.SuperiorTabla {
  width: 100%;
  height: 34px;
  border: 1px solid rgb(229, 231, 235);

  margin-top: 20px;
  justify-content: flex-end;
  display: flex;
  background-color: rgb(241, 245, 249);
}
.BotonNuevaNumeracion {
  width: 160px;
  height: 35px;
  background-color: rgb(48, 171, 169);
  border: 1px solid rgb(152, 153, 155);
  border-radius: 8px;
  color: white;
  cursor: pointer;
}
.TipoDocumentoBoton {
  display: block;
  width: 300px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid rgb(203, 213, 225);
}
.TipoDocumento {
  display: block;
  font-size: 15px;
  margin-top: 15px;
  color: rgb(51, 65, 85);
}
.DescripcionNumeraciones {
  color: rgb(51, 65, 85);
  display: block;
  font-size: 16px;
}

.TituloNumeraciones {
  display: block;
  color: rgb(15, 23, 42);
  font-size: 20px;
  font-weight: bold;
}
</style>
<style>
.Principal {
  padding: 20px;
  height: 546px;
  width: 900px;
}
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
