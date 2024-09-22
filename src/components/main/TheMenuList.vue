<script setup>
import { MENU_LIST } from '../../store/constants'

const emit = defineEmits(['selected-dish'])

const selectDish = function (dish) {
  emit('selected-dish', dish)
}
</script>

<template>
  <ul class="flex flex-wrap justify-center">
    <li
      v-for="item in MENU_LIST"
      :key="item"
      class="border p-4 cursor-pointer m-3 hover:shadow-md hover:mt-2 active:bg-slate-100"
      @click="selectDish(item)">
      <img
        :src="`/img/${item.photo}`" alt="menu" class="h-48 object-contain">
      <div class="font-mono flex justify-between mt-4">
        <p>
          {{ item.title }}
        </p>
        <p>
          {{ item.price }}
        </p>
      </div>
    </li>
  </ul>
</template>