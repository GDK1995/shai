<script setup>
import OrderItem from './OrderItem.vue'
import { orderList } from '@/store/order'
import { totalSum } from '@/store/functions'
import { CURRENCY, TOTAL_TEXT } from '@/store/constants'

// computed
const totalPrice = totalSum()
</script>

<template>
  <div class="flex justify-center w-4/5">
    <ul class="flex flex-col w-4/5 m-4">
      <li v-for="(item, index) in orderList"
        :key="item">
        <OrderItem
          :queue="index"
          :orderItem="item"
          class="flex mb-2"/>
      </li>
      <li class="flex justify-between py-2 px-4 border flex-grow">
        <p>{{ TOTAL_TEXT }}</p>
        <p>{{ totalPrice }} {{ CURRENCY }}</p>
      </li>
    </ul>
  </div>
</template>
