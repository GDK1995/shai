<script setup>
import { reactive } from 'vue'
import DishInfo from './DishInfo.vue'
import BaseButtonWhite from '../../bases/BaseButtonWhite.vue'
import { ADD_ORDER, Q_DO_YOU_HAVE_ALLERGY, ORDER_RESET } from '../../../store/constants'
import { addOrder, orderItem, clearingOrderItem } from '../../../store/order'

// props and emits
const props = defineProps({
  dish: Object
})

const emits = defineEmits(['clear-dish'])

// functions
const setCount = function (act) {
  if (act === 'increase') {
    orderItem.count += 1
  } else if (act === 'decrease' && orderItem.count != 1) {
    orderItem.count -= 1
  }
}

const addOrders = function () {
  addOrder(orderItem, props.dish.id)
}

const clear = function () {
  clearingOrderItem()
  clearingDish()
}

const clearingDish = function () {
  emits('clear-dish')
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-pink-400 text-white">
    <div class="fixed flex flex-col p-4">
      <button @click="clear" class="absolute right-5">x</button>
      <DishInfo
        class="flex flex-col overflow-x-auto max-h-96"
        :dish="props.dish"
        :count="orderItem.count"
        @set-count="setCount"/>
      <div class="flex mt-6">
        <div class="text-sm">
          <p>{{ Q_DO_YOU_HAVE_ALLERGY }}</p>
          <textarea
            style="resize:none;"
            cols="25"
            rows="3"
            v-model="orderItem.excludedIngredients"
            placeholder="Напишите ингредиенты"
            class="rounded border-pink-200 bg-pink-300 p-2 placeholder-white focus:outline-none"></textarea>
        </div>
        <BaseButtonWhite @click="addOrders" class="m-auto">
          <p>{{ ADD_ORDER }}</p>
        </BaseButtonWhite>
      </div>
    </div>
  </div>
</template>
