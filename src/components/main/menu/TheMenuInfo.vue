<script setup>
import DishInfo from './DishInfo.vue'
import BaseButtonWhite from '../../bases/BaseButtonWhite.vue'
const props = defineProps({
  dish: Object
})

const emit = defineEmits(['clear-dish'])
const clearingDish = function () {
  emit('clear-dish')
}
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-pink-400 text-white">
    <div class="fixed flex flex-col p-4">
      <button @click="clearingDish" class="absolute right-5">x</button>
      <DishInfo
        :dish="props.dish"
        class="flex flex-col overflow-x-auto max-h-96" />
      <div class="flex">
        <div class="text-sm">
          <p>Есть аллергия на ингредиенты?</p>
          <textarea
            style="resize:none;"
            cols="25"
            rows="3"
            placeholder="Напишите ингредиенты"
            class="rounded border-pink-200 bg-pink-300 p-2 placeholder-white focus:outline-none"></textarea>
        </div>
        <BaseButtonWhite class="m-auto">
          <p>Добавить заказ</p>
        </BaseButtonWhite>
      </div>
    </div>
  </div>
</template>