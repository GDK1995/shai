<script setup>
import OrderList from './OrderList.vue'
import EmptyOrder from '../../empty/EmptyOrder.vue'
import { DONT_YET_ORDER_ANYTHING } from '../../../store/constants'

// props
const props = defineProps({
  orderList: Array
})
</script>

<template>
  <div class="my-12">
    <OrderList
      v-if="props.orderList.length"
      :order-list="orderList"/>
    <EmptyOrder v-else>
      <p>{{ DONT_YET_ORDER_ANYTHING }}</p>
    </EmptyOrder>
  </div>
</template>
