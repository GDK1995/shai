<script setup>
import { computed } from 'vue'
import BaseButtonPink from '../../bases/BaseButtonPink.vue'
import OrderItem from './OrderItem.vue'
import { CURRENCY, TOTAL_TEXT, ORDER_TEXT, CONFIRM_ORDER, MENU_LIST } from '../../../store/constants'

// props
const props = defineProps({
  orderList: Array
})

// computed
const totalPrice = computed(() => {
  let total = 0
  props.orderList.forEach(element => {
    const price = MENU_LIST.find(item => item.id === element.dish_id).price
    total += price * element.count
  })
  return total
})
</script>

<template>
  <div class="flex flex-col text-center">
    <p class="text-2xl my-8">{{ ORDER_TEXT }}</p>
    <div class="flex justify-center">
      <ul class="flex flex-col w-4/5 m-4">
        <li
          v-for="(item, index) in props.orderList"
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
    <div>
      <BaseButtonPink>
        <p>{{ CONFIRM_ORDER }}</p>
      </BaseButtonPink>
    </div>
  </div>
</template>
