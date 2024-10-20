<script setup>
import BaseButtonPink from '../../bases/BaseButtonPink.vue'
import OrderAction from './OrderAction.vue'
import OrderList from './OrderList.vue'
import { confirmOrder, isConfirmed } from '@/store/order'
import { totalSum } from '@/store/functions'
import { CURRENCY, TOTAL_TEXT, ORDER_TEXT, CONFIRM_ORDER } from '../../../store/constants'

// computed
const totalPrice = totalSum()
</script>

<template>
  <div class="flex flex-col text-center items-center">
    <p class="text-2xl">{{ ORDER_TEXT }}</p>
    <OrderAction
      class="transition-all duration-500 ease-in mb-5"
      :class="[!isConfirmed ? 'h-0 opacity-0' : 'h-9 opacity-100']"/>
    <OrderList />
    <BaseButtonPink v-if="!isConfirmed" @click="confirmOrder" class="w-52">
      <p>{{ CONFIRM_ORDER }}</p>
    </BaseButtonPink>
  </div>
</template>
