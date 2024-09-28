<script setup>
import { computed } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import BaseButtonIcon from '../../bases/BaseButtonIcon.vue'
import { CURRENCY, EXCLUDE_TEXT, MENU_LIST } from '../../../store/constants'
import { deleteOrderItem } from '../../../store/order'

// props
const props = defineProps({
  orderItem: Object,
  queue: Number
})

// computed
const orderInfo = computed(() => {
  const {title, price} = MENU_LIST.find(item => item.id === props.orderItem.dish_id)
  return {title, price}
})
</script>

<template>
  <div>
    <div class="flex justify-between py-2 px-4 border flex-grow">
      <p>{{queue + 1}}) {{ orderInfo.title }} <span v-if="props.orderItem.excludedIngredients">({{ EXCLUDE_TEXT }}: {{ props.orderItem.excludedIngredients }})</span></p>
      <div class="flex">
        <p class="mr-8">{{ orderInfo.price }} {{ CURRENCY }} x {{ props.orderItem.count }}</p>
        <p>{{ orderInfo.price * props.orderItem.count }} {{ CURRENCY }}</p>
      </div>
    </div>
    <BaseButtonIcon
      class="ml-4 active:bg-pink-50"
      @click="deleteOrderItem(props.orderItem.id)">
      <TrashIcon class="h-5 text-red-500"/>
    </BaseButtonIcon>
  </div>
</template>
