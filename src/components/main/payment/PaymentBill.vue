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
  <div class="flex items-center justify-center">
    <table>
      <tbody>
        <tr>
          <th>{{ NAME_DISH }}</th>
          <th>{{ PRICE_DISH }}</th>
        </tr>
        <tr
          v-for="(item, index) in orderList"
          :key="item + index">
          <td>{{ orderInfo(item).title }}</td>
          <td>{{ orderInfo(item).price * item.count }} {{ CURRENCY }}</td>
        </tr>
        <tr>
          <td>{{ TOTAL_TEXT }}</td>
          <td>{{ totalPrice }} {{ CURRENCY }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
