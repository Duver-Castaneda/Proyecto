<template>
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
</template>
<script setup lang="ts"></script>
<style scoped>
.thead {
  border-bottom: 1px solid black;
  border-collapse: collapse;
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
