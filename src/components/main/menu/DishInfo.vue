<script setup>
import CounterItem from '@/components/bases/CounterItem.vue';
import { CURRENCY, INGREDIENTS_TEXT, PRICE_TEXT } from '../../../store/constants'

// props and emits
const props = defineProps({
  dish: Object,
  count: Number
})

const emit = defineEmits(['set-count'])

// functions
const setCount = function (act) {
  emit('set-count', act)
}
</script>

<template>
  <div>
    <p class="uppercase">{{ props.dish.title }}</p>
    <img :src="`/img/${props.dish.photo}`" alt="dish" class="h-48 my-4">
    <p>{{ INGREDIENTS_TEXT }}: {{ props.dish.ingredients }}</p>
    <div class="flex">
      <p class="my-4">{{ PRICE_TEXT }}: {{ props.dish.price }} {{ CURRENCY }}</p>
      <CounterItem
        @set-count="setCount"
        :count="props.count"
        class="flex m-auto gap-2"/>
    </div>
  </div>
</template>
