<script setup>
import { MENU_LIST, CURRENCY } from '../../../store/constants'

// emits
const emit = defineEmits(['selected-dish'])

// functions
const selectDish = function (dish) {
  emit('selected-dish', dish)
}
</script>

<template>
  <div>
    <ul class="flex flex-wrap place-content-center lg:place-content-stretch">
      <li
        v-for="item in MENU_LIST"
        :key="item"
        class="flex flex-col border p-4 cursor-pointer m-3 hover:shadow-md hover:mt-2 active:bg-slate-100"
        @click="selectDish(item)">
        <img :src="`/img/${item.photo}`" alt="menu" class="h-48 w-64 object-fill">
        <div class="flex justify-between mt-4">
          <p>{{ item.title }}</p>
          <p>{{ item.price }} {{ CURRENCY }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
