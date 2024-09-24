<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid'
import BaseButtonIcon from '../../bases/BaseButtonIcon.vue'
import { CURRENCY, EXCLUDE_TEXT } from '../../../store/constants'

// props
const props = defineProps({
  orderItem: Object,
  queue: Number
})
</script>

<template>
  <div>
    <div class="flex justify-between py-2 px-4 border flex-grow">
      <p>{{queue + 1}}) {{ props.orderItem.title }} <span v-if="props.orderItem.excludedIngredients">({{ EXCLUDE_TEXT }}: {{ props.orderItem.excludedIngredients }})</span></p>
      <div class="flex">
        <p class="mr-8">{{ props.orderItem.price }} {{ CURRENCY }} x {{ props.orderItem.count }}</p>
        <p>{{ props.orderItem.price * props.orderItem.count }} {{ CURRENCY }}</p>
      </div>
    </div>
    <BaseButtonIcon class="ml-4">
      <TrashIcon class="h-5 text-red-500"/>
    </BaseButtonIcon>
  </div>
</template>
