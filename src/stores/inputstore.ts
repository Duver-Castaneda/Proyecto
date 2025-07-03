import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInputStore = defineStore('input', () => {
  const inputValue = ref('')
  const InputCliente = ref('')

  const InputCedula = ref('')
  const Creacion = ref('')
  const Vencimiento = ref('')
  const PlazoDePago = ref('')
  const Telefono = ref('')
  const selectedPlazo = ref('')
  const precio = ref('')
  const itemName = ref('')
  const Descuento = ref('')
  const impuesto = ref('')

  return {
    inputValue,
    InputCliente,
    InputCedula,
    Creacion,
    Vencimiento,
    PlazoDePago,
    Telefono,
    selectedPlazo,
    precio,
    itemName,
    Descuento,
    impuesto,
  }
})
