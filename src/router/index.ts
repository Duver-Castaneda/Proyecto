import { createRouter, createWebHistory } from 'vue-router'
import CrearFactura from '@/views/CrearFactura.vue'

import AlegraFC from '@/views/AlegraFC.vue'
import NumeracionFactura from '@/views/NumeracionFactura.vue'
import NumeracionFacturaAdd from '@/views/NumeracionFacturaAdd.vue'
import FacturaCreada from '@/views/FacturaCreada.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AlegraFC,
    },
    {
      path: '/FacturaCreada',
      name: 'FacturaCreada',
      component: FacturaCreada,
    },
    {
      path: '/CRfactura',
      name: 'CrearFactura',
      component: CrearFactura,
    },
    {
      path: '/Numerationfactura',
      name: 'NumeracionFactura',
      component: NumeracionFactura,
    },
    {
      path: '/NumerationfacturaAdd',
      name: 'NumeracionFacturaAdd',
      component: NumeracionFacturaAdd,
    },
  ],
})

export default router
