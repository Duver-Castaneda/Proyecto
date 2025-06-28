<template>
  <div class="ContenedorPago">
    <div class="Pago">
      <div>
        <span class="TituloSpam">Pago recibido</span
        ><span class="ContenidoSpan"
          >Si te hicieron un pago asociado a esta venta puedes hacer aquí su registro.</span
        >
      </div>
      <div>
        <button @click="mostrar = !mostrar" class="BotonSpan">
          {{ mostrar ? 'Quitar Pago' : 'Agregar Pago' }}
        </button>
      </div>
    </div>
    <transition name="desplegar">
      <div v-show="mostrar" class="contenido">
        <table>
          <thead class="thead" style="background-color: #f0f0f0">
            <tr>
              <th class="Numeracion">Numeracion</th>
              <th class="Fecha">Fecha</th>
              <th class="Cuenta">Cuenta bancaria</th>
              <th class="Metodo">Metodo de pago</th>
              <th class="Valor">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select name="" class="NumeracionI" style="color: rgb(51, 65, 85)">
                  <option value="">Recibo de caja</option>
                </select>
              </td>
              <td>
                <input type="date" class="FechaI" name="fecha" style="color: rgb(51, 65, 85)" />
              </td>
              <td>
                <select name="" class="CuentaI" style="color: rgb(51, 65, 85)">
                  <option value="">Tarjeta de credito empresarial</option>
                  <option value="">Caja chica</option>
                  <option value="">Caja generak</option>
                  <option value="">Banco 1</option>
                </select>
              </td>
              <td>
                <select name="" class="MetodoI" style="color: rgb(51, 65, 85)">
                  <option value="">Efectivo</option>
                  <option value="">Consignacion</option>
                  <option value="">Transferencia</option>
                  <option value="">Cheque</option>
                  <option value="">Tarjeta de credito</option>
                  <option value="">Tarjeta debito</option>
                </select>
              </td>
              <td><textarea name="" class="ValorI" style="color: rgb(51, 65, 85)"></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const mostrar = ref(false)
</script>
<style scoped>
.NumeracionI,
.FechaI,
.CuentaI,
.MetodoI,
.ValorI {
  width: 95%;
  height: 30px;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 7px;
}
.Numeracion,
.Fecha,
.Cuenta,
.Metodo,
.Valor {
  width: 20%;
}
table {
  width: 100%;
}
.desplegar-enter-to,
.desplegar-leave-from {
  max-height: 200px; /* Ajusta según el tamaño de tu contenido */
}
.desplegar-enter-from,
.desplegar-leave-to {
  max-height: 0;
}
.desplegar-enter-active,
.desplegar-leave-active {
  transition: max-height 0.4s ease;
  overflow: hidden;
}
.contenido {
  background: white;
  padding: 10px;
  margin-top: 10px;
  display: block;
}

.ContenedorPago {
  background-color: white;
  padding: 32px;
}
.Pago {
  justify-content: space-between;
  width: 100%;

  display: flex;

  align-items: center;
}
.TituloSpam {
  color: black;
  display: block;
  font-size: 18px;
}
.ContenidoSpan {
  display: block;
  color: rgb(100, 116, 139);
  font-size: 16px;
}
.BotonSpan {
  color: rgb(48, 171, 169);
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  border: none;
}
</style>
