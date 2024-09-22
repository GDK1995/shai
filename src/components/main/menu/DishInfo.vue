<script setup>
import { ref } from 'vue'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/24/solid'

// props and emits
const props = defineProps({
  dish: Object
})

const emit = defineEmits(['count-dish'])

// vars
const count = ref(1)

// functions
const increase = function () {
  count.value += 1
  emit('count-dish', count.value)
}

const decrease = function () {
  if (count.value > 1) {
    count.value -= 1
    emit('count-dish', count.value)
  }
}
</script>

<template>
  <div>
    <p class="uppercase">{{ props.dish.title }}</p>
    <img :src="`/img/${props.dish.photo}`" alt="dish" class="h-48 my-4">
    <p>Ингредиенты: {{ props.dish.ingredients }}</p>
    <div class="flex">
      <p class="my-4">Цена: {{ props.dish.price }} тг.</p>
      <div class="flex m-auto gap-2">
        <MinusCircleIcon @click="decrease" class="h-7 cursor-pointer active:text-pink-50"/>
        <p class="m-auto">{{ count }}</p>
        <PlusCircleIcon @click="increase" class="h-7 cursor-pointer active:text-pink-50"/>
      </div>
    </div>
  </div>
</template>