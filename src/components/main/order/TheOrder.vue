<script setup>
import { TrashIcon } from '@heroicons/vue/24/solid'
import BaseButtonIcon from '../../bases/BaseButtonIcon.vue'

// props
const props = defineProps({
  orderList: Array
})
</script>

<template>
  <div class="flex flex-col text-center">
    <p class="text-2xl my-8">Заказ</p>
    <div class="flex justify-center">
      <ul class="flex flex-col w-4/5 m-4">
        <li v-for="(item, index) in props.orderList" :key="item" class="flex">
          <div class="flex justify-between py-2 px-4 border flex-grow">
            <p>{{index + 1}}) {{ item.title }} <span v-if="item.excludedIngredients">(исключить: {{ item.excludedIngredients }})</span></p>
            <div class="flex">
              <p class="mr-8">{{ item.price }} x {{ item.count }}</p>
              <p>{{ item.price * item.count }}</p>
            </div>
          </div>
          <BaseButtonIcon class="ml-4">
            <TrashIcon class="h-5 text-red-500"/>
          </BaseButtonIcon>
        </li>
      </ul>
    </div>
  </div>
</template>