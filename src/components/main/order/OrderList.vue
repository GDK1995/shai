<script setup>
import { inject } from 'vue'
import BaseButtonPink from '../../bases/BaseButtonPink.vue'
import OrderItem from './OrderItem.vue'
import { orderList, confirmOrder, isConfirmed } from '@/store/order'
import { totalSum } from '@/store/functions'
import { CURRENCY, TOTAL_TEXT, ORDER_TEXT, CONFIRM_ORDER, MENU_LIST } from '../../../store/constants'

// computed
const totalPrice = totalSum()
</script>

<template>
  <div class="flex flex-col text-center">
    <p class="text-2xl">{{ ORDER_TEXT }}</p>
    <div class="flex justify-center">
      <ul class="flex flex-col w-4/5 m-4">
        <li
          v-for="(item, index) in orderList"
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
    <div v-if="!isConfirmed">
      <BaseButtonPink
        @click="confirmOrder">
        <p>{{ CONFIRM_ORDER }}</p>
      </BaseButtonPink>
    </div>
  </div>
</template>
