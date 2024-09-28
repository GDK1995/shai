<script setup>
import TheMenu from './menu/TheMenu.vue'
import TheOrder from './order/TheOrder.vue'
import ThePayment from './payment/ThePayment.vue'
import { THE_MENU, THE_ORDER } from "@/store/constants"
import { orderList } from '../../store/order'

// emits and props
const props = defineProps({
  activePage: String
})

</script>

<template>
  <div>
    <TheMenu
      v-if="props.activePage === THE_MENU"/>
    <TheOrder
      v-else-if="props.activePage === THE_ORDER"
      :order-list="orderList"/>
    <ThePayment v-else/>
  </div>
</template>
