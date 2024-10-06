<script setup>
import { inject } from 'vue'
import { orderListKey } from '../../../store/keys'
import { NAME_DISH, PRICE_DISH, TOTAL_TEXT } from '../../../store/constants'

const orderList = inject(orderListKey)
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
          <td>{{ index + 1 }}</td>
          <td>{{ item }}</td>
          <td>{{ item }}</td>
        </tr>
        <tr>
          <td>{{ TOTAL_TEXT }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
