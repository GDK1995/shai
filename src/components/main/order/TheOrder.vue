<script setup>
import { orderList } from '@/store/order'
import OrderS from './OrderS.vue'
import EmptyOrder from '../../empty/EmptyOrder.vue'
import { DONT_YET_ORDER_ANYTHING } from '../../../store/constants'
</script>

<template>
  <div class="my-12">
    <OrderS v-if="orderList.length"/>
    <EmptyOrder v-else>
      <p>{{ DONT_YET_ORDER_ANYTHING }}</p>
    </EmptyOrder>
  </div>
</template>
