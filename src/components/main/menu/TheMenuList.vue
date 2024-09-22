<script setup>
import { MENU_LIST } from '../../../store/constants'

// emits
const emit = defineEmits(['selected-dish'])

// functions
const selectDish = function (dish) {
  emit('selected-dish', dish)
}
</script>

<template>
  <ul class="flex flex-wrap">
    <li
      v-for="item in MENU_LIST"
      :key="item"
      class="flex flex-col border p-4 cursor-pointer m-3 hover:shadow-md hover:mt-2 active:bg-slate-100"
      @click="selectDish(item)">
      <img
        :src="`/img/${item.photo}`" alt="menu" class="h-48 object-fill">
      <div class="flex justify-between mt-4">
        <p>
          {{ item.title }}
        </p>
        <p>
          {{ item.price }} тг.
        </p>
      </div>
    </li>
  </ul>
</template>