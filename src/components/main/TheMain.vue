<script setup>
import { ref, provide } from "vue"
import TheMenu from './menu/TheMenu.vue'
import TheOrder from './order/TheOrder.vue'
import ThePayment from './payment/ThePayment.vue'
import { THE_MENU, THE_ORDER } from "@/store/constants"
import { orderList } from '../../store/order'
import * as keys from '../../store/keys'

// emits and props
const props = defineProps({
  activePage: String
})

const isConfirmed = ref(false)

const confirmOrder = function () {
  isConfirmed.value = true
}

provide(keys.toConfirmOrderKey, confirmOrder)
provide(keys.orderListKey, orderList)
</script>

<template>
  <div>
    <TheMenu
      v-if="props.activePage === THE_MENU"/>
    <TheOrder
      v-else-if="props.activePage === THE_ORDER"
      :order-list="orderList"/>
    <ThePayment
      v-else
      :isConfirmed="isConfirmed"/>
  </div>
</template>
