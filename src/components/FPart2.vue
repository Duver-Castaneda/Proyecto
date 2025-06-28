<template>
  <section class="filtros">
    <div class="busqueda-container" style="display: flex">
      <input
        type="text"
        v-model="termino"
        placeholder="Buscar cliente"
        class="input-busqueda"
        onclick="Cambiarborde()"
      />
      <button style="display: flex" class="filtrar">Filtrar</button>
    </div>
  </section>
  <section class="fc1">
    <p class="titulo">¡Aun no tienes facturas!</p>
    <p class="parrafo">Parece que no has generado ninguna factura de venta hasta ahora</p>
    <button class="boton" @click="goToFormView">Crear una factura de venta</button>
  </section>
  <section class="items">
    <div style="display: flex">
      Items por pagina:
      <select class="opciones">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      | 1-11
      <span class="derecha">pagina </span>
      <select style="display: flex" class="seleccionarPagina">
        <option value="1" selected>1</option>
      </select>
      <span class="paginas2">1 < ></span>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const goToFormView = () => {
  router.push({ name: 'CrearFactura' })
}
import { ref } from 'vue'
const termino = ref('')
</script>
<style scoped>
.titulo {
  font-size: 30px;
  color: black;
}

.parrafo {
  color: rgb(107, 114, 128);
}

.boton {
  color: black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-radius: 10px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 8px;
  padding-top: 8px;
  cursor: pointer;
  background-color: white;

  border-color: rgb(199, 200, 202);
  margin-top: 10px;
}

.items,
.filtros {
  width: 990px;
  height: 48px;
  background-color: white;

  border: 1px solid rgb(199, 200, 202);

  align-content: center;
  align-items: center;
  margin-right: -621px;
  display: block;
  padding: 5px;
}

.filtros {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.opciones {
  margin-left: 5px;
  width: 50px;
  height: 30px;
  border-radius: 10px;
}
.derecha {
  text-align: right;
  margin-left: 600px;
  text-align: center;
  align-content: center;
  align-items: center;
}

.input-busqueda {
  border-color: rgb(229, 231, 235);
  width: 214px;
  height: 35px;
  text-align: center;
  font-size: 15px;
  border-radius: 10px;
  display: flex;
}

.filtrar {
  padding: 5px;
  padding-top: 10px;
  align-content: center;
  background-color: white;
  border: 0px;
  text-align: center;
  cursor: pointer;
  margin-left: 10px;
}
.seleccionarPagina {
  height: 30px;
  width: 50px;
  margin-left: 10px;
  border-radius: 10px;
  border-color: rgb(229, 231, 235);
}
.paginas2 {
  text-align: center;
  align-content: center;
}
.fc {
  background-color: black;
  width: 1024px;
  height: 517px;

  color: rgb(107, 114, 128);
  padding: 20px;
}

.fc1 {
  width: 990px;
  height: 319px;
  background-color: white;

  align-items: center;
  align-content: center;
  text-align: center;

  border-color: rgb(107, 114, 128);
  border: 1px solid rgb(199, 200, 202);
}
</style>
