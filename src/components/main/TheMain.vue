<script setup>
import { ref } from 'vue'
import TheMenu from './menu/TheMenu.vue'
import TheOrder from './order/TheOrder.vue'
import ThePayment from './payment/ThePayment.vue'
import { THE_MENU, THE_ORDER } from "@/store/constants"

// emits and props
const props = defineProps({
  activePage: String
})

const emits = defineEmits(['add-order'])

// vars
const orderList = ref([])

// functions
const addOrder = function (orderItem) {
  orderList.value.push(orderItem)
}
</script>

<template>
  <div>
    <TheMenu
      v-if="props.activePage === THE_MENU"
      @add-order="addOrder"/>
    <TheOrder
      v-else-if="props.activePage === THE_ORDER"
      :order-list="orderList"/>
    <ThePayment v-else/>
  </div>
</template>
