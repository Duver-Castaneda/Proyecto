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
      <table style="border-collapse: collapse">
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

    <div class="SignsTotals">
      <div class="ContainersTotals">
        <div class="IMGContainer"></div>
        <span class="SpanElaborado">ELABORADO POR</span>
      </div>
      <div class="ContainersTotals1">
        <table>
          <tbody>
            <tr>
              <td class="Totals">Subtotal</td>
              <td class="Totals1">$</td>
            </tr>
            <tr>
              <td class="Totals">Descuento</td>
              <td class="Totals1">${{ store1.Descuento }}</td>
            </tr>
            <tr>
              <td class="Totals">Subtotal</td>
              <td class="Totals1">$</td>
            </tr>
            <tr>
              <td class="Totals" style="border-top: 1px solid rgb(229, 231, 235)">
                <span style="font-size: 24px">Total</span>
              </td>
              <td class="Totals1" style="border-top: 1px solid rgb(229, 231, 235)">
                <span style="font-size: 24px">${{ store1.inputValue }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="InformacionAdicional">
      <span style="color: black">Informacion Adicional</span>
      <table style="width: 100%">
        <tbody>
          <tr>
            <td class="InfoAdd1">Forma de pago</td>
            <td class="InfoAdd"></td>
          </tr>
          <tr>
            <td class="InfoAdd1">Medio de pago</td>
            <td class="InfoAdd"></td>
          </tr>
          <tr>
            <td class="InfoAdd1">Tipo de factura</td>
            <td class="InfoAdd">Factura de venta</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Notas">
      <div class="ContainersNotas1">
        <span class="TitleNotas1">Terminos Y condiciones</span
        ><span class="SpanNotaCont"
          >Este documento se asimila en todos sus efectos a una letra de cambio de conformidad con
          el Art. 774 del código de comercio. Autorizo que en caso de incumplimiento de esta
          obligación sea reportado a las centrales de riesgo, se cobraran intereses por mora</span
        >
      </div>
      <div class="ContainersNotas"><span>Nota</span><span></span></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useInputStore } from '@/stores/inputstore'
import StableHead from './StableHead.vue'
const store1 = useInputStore()
</script>

<style scoped>
.TitleNotas1 {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500px;
}
.SpanNotaCont {
  display: block;
  font-size: 12px;
}
.ContainersNotas1 {
  width: 55%;
  padding-top: 32px;
  display: block;
  color: rgb(118, 118, 118);
}

.ContainersNotas {
  width: 40%;
  padding-top: 32px;
  display: block;
  color: rgb(118, 118, 118);
}

.Notas {
  display: flex;
  justify-content: space-between;
  height: 112px;
}

.InfoAdd1 {
  width: 40%;
  padding: 10px 1px 10px 1px;
  border-bottom: 1px solid rgb(229, 231, 235);
  font-size: 12px;
  color: rgb(107, 114, 128);
}
.InfoAdd {
  width: 60%;
  padding: 10px 1px 10px 1px;
  border-bottom: 1px solid rgb(229, 231, 235);
  font-size: 12px;
  color: rgb(88, 88, 96);
}
.InformacionAdicional {
  width: 448px;
  height: 171px;
}
.Totals {
  padding: 3px 12px 3px 24px;
  color: rgb(88, 89, 95);
  font-size: 16px;
}
.Totals1 {
  padding: 3px 12px 3px 16px;
  color: rgb(88, 89, 95);
  font-size: 16px;
}

.SpanElaborado {
  display: flex;
  justify-content: center;
  color: rgb(88, 89, 95);
  font-size: 14px;
}
.IMGContainer {
  width: 100%;
  display: block;
  padding: 9px 53px 9px 53px;
  height: 70%;
  border-bottom: 2px solid rgb(229, 231, 235);
}
.ContainersTotals {
  display: block;
  width: 30%;
  height: 100%;

  justify-content: center;
}
.ContainersTotals1 {
  display: block;
  width: 200px;
  height: 134px;

  justify-content: center;
}
.SignsTotals {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 135px;
  margin: 28px 0px 28px 0px;
}
.TablaDeItems {
  margin-top: 40px;
}
.td1 {
  width: 15%;
}
p td {
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
