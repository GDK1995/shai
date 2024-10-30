<script setup>
import { computed } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import BaseButtonIcon from '../../bases/BaseButtonIcon.vue'
import { CURRENCY, EXCLUDE_TEXT } from '../../../store/constants'
import { orderData } from '@/store/functions'
import { isOrderObjectValidate, isNumber } from '@/store/validator'
import { deleteOrderItem, isConfirmed } from '../../../store/order'

// props
const props = defineProps({
  orderItem: {
    type: Object,
    validator: isOrderObjectValidate
  },
  queue: {
    type: Number,
    validator: isNumber
  }
})

// computed
const orderInfo = computed(() => orderData(props.orderItem))
</script>

<template>
  <div>
    <div class="flex flex-col lg:flex-row justify-between py-2 px-4 border flex-grow">
      <p class="text-left">
        {{queue + 1}}) {{ orderInfo.title }}
        <span v-if="props.orderItem.excludedIngredients">({{ EXCLUDE_TEXT }}: {{ props.orderItem.excludedIngredients }})</span>
      </p>
      <div class="flex">
        <p class="mr-8">{{ orderInfo.price }} {{ CURRENCY }} x {{ props.orderItem.count }}</p>
        <p>{{ orderInfo.price * props.orderItem.count }} {{ CURRENCY }}</p>
      </div>
    </div>
    <BaseButtonIcon
      v-if="!isConfirmed"
      class="ml-4 active:bg-pink-50"
      @click="deleteOrderItem(props.orderItem.id)">
      <TrashIcon class="h-5 text-red-500"/>
    </BaseButtonIcon>
  </div>
</template>
