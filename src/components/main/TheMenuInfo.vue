<script setup>
defineProps({
  dish: Object
})
</script>

<template>
  <div class="relative">
    <div class="fixed flex flex-col p-4 bg-pink-400 text-white font-mono">
      <div class="flex flex-grow flex-col">
        <p class="uppercase">{{ dish.title }}</p>
        <img :src="`/img/${dish.photo}`" alt="dish" class="h-48 my-4">
        <p>Ингредиенты: {{ dish.ingredients }}</p>
        <p class="my-4">Цена: {{ dish.price }}</p>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>