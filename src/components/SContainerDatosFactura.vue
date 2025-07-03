<template>
  <div class="ContainerDatosFactura">
    <div class="InformacionUser">
      <div class="DivsInformacion"></div>
      <div class="DivsInformacion">
        <span class="Span">Stiven</span><span class="Span1">Identificacion:</span>
      </div>
      <div class="DivsInformacion1" style="align-items: flex-end">
        <span class="SpanNo">NO. 1</span>
      </div>
    </div>
    <div class="FormContainer">
      <table>
        <tr>
          <td class="td1">Cliente</td>
          <td>{{ store1.InputCliente }}</td>
          <td class="td1">Creacion</td>
          <td class="td1">{{ store1.Creacion }}</td>
        </tr>
        <tr>
          <td class="td1">Cedula de ciudadania</td>
          <td>{{ store1.InputCedula }}</td>
          <td class="td1">Vencimiento</td>
          <td class="td1">{{ store1.Vencimiento }}</td>
        </tr>
        <tr>
          <td class="td1">Telefono</td>
          <td>{{ store1.Telefono }}</td>
          <td class="td1">Plazo de pago</td>
          <td class="td1"></td>
        </tr>
      </table>
    </div>

    <div class="TablaDeItems">
      <table>
        <StableHead />
        <tbody>
          <tr>
            <td>{{ store1.itemName }}</td>
            <td></td>
            <td>${{ store1.precio }}</td>
            <td>{{ store1.Descuento }}</td>
            <td>{{ store1.impuesto }}</td>
            <td></td>
            <td></td>
            <td>{{ store1.inputValue }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useInputStore } from '@/stores/inputstore'
import StableHead from './StableHead.vue'
const store1 = useInputStore()
</script>
<style scoped>
.TablaDeItems {
  margin-top: 40px;
}
.td1 {
  width: 15%;
}
td {
  border-bottom: 1px solid rgb(229, 231, 235);
  padding: 8px 1px 8px 1px;
}
.FormContainer {
  width: 100%;
  height: 150px;
  padding: 20px 0px 20px 0px;
}
.SpanNo {
  color: rgb(0, 83, 94);
  display: flex;
}
.Span {
  display: block;
  color: rgb(107, 114, 128);
  font-size: 22px;
  text-align: center;
}

.Span1 {
  display: block;
  color: rgb(107, 114, 128);
  font-size: 16px;
  text-align: center;
}

.InformacionUser {
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 16px 0px 24px 0px;
}

.DivsInformacion {
  height: 110px;
  width: 30%;
}
.DivsInformacion1 {
  height: 110px;
  width: 30%;
}

.ContainerDatosFactura {
  background-color: white;
  width: 100%;
  height: 950px;
  padding: 40px;
  margin-top: 20px;
}
</style>
