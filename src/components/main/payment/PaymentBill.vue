<script setup>
import { computed } from 'vue'
import { orderList } from '@/store/order'
import { orderData, totalSum } from '@/store/functions'
import { NAME_DISH, PRICE_DISH, TOTAL_TEXT, CURRENCY } from '../../../store/constants'

const orderInfo = (item) => orderData(item)

// computed
const totalPrice = totalSum()
</script>


<template>
  <div class="flex items-center justify-center text-center">
    <table class="w-4/5">
      <tbody>
        <tr class="p-2 bg-pink-200">
          <th>{{ NAME_DISH }}</th>
          <th>{{ PRICE_DISH }}</th>
        </tr>
        <tr
          v-for="(item, index) in orderList"
          :key="item + index">
          <td class="p-2">{{ orderInfo(item).title }}</td>
          <td class="p-2">{{ orderInfo(item).price * item.count }} {{ CURRENCY }}</td>
        </tr>
        <tr class="bg-pink-100">
          <td class="p-2">{{ TOTAL_TEXT }}</td>
          <td class="p-2">{{ totalPrice }} {{ CURRENCY }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
