<script setup>
import { ref, reactive } from 'vue'
import DishInfo from './DishInfo.vue'
import BaseButtonWhite from '../../bases/BaseButtonWhite.vue'

// props and emits
const props = defineProps({
  dish: Object
})

const emits = defineEmits(['clear-dish', 'add-order'])

// vars
const excludedIngredients = ref('')

let orderItem = reactive({
  title: '',
  excludedIngredients: '',
  count: 1,
  price: 0
})

// functions
const setCount = function (quantity) {
  orderItem.count = quantity
}

const setOrder = function () {
  orderItem.title = props.dish.title
  orderItem.price = props.dish.price
  addOrder()
}

const addOrder = function () {
  emits('add-order', orderItem)
}

const clearingOrderItem = function () {
  orderItem = {
    title: '',
    excludedIngredients: '',
    count: 1,
    price: 0
  }
  clearingDish()
}

const clearingDish = function () {
  emits('clear-dish')
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-pink-400 text-white">
    <div class="fixed flex flex-col p-4">
      <button @click="clearingOrderItem" class="absolute right-5">x</button>
      <DishInfo
        :dish="props.dish"
        class="flex flex-col overflow-x-auto max-h-96"
        @count-dish="setCount"/>
      <div class="flex mt-6">
        <div class="text-sm">
          <p>Есть аллергия на ингредиенты?</p>
          <textarea
            style="resize:none;"
            cols="25"
            rows="3"
            v-model="orderItem.excludedIngredients"
            placeholder="Напишите ингредиенты"
            class="rounded border-pink-200 bg-pink-300 p-2 placeholder-white focus:outline-none"></textarea>
        </div>
        <BaseButtonWhite @click="setOrder" class="m-auto">
          <p>Добавить заказ</p>
        </BaseButtonWhite>
      </div>
    </div>
  </div>
</template>