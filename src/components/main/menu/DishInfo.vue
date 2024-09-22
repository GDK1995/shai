<script setup>
const props = defineProps({
  dish: Object
})
</script>

<template>
  <div>
    <p class="uppercase">{{ props.dish.title }}</p>
    <img :src="`/img/${props.dish.photo}`" alt="dish" class="h-48 my-4">
    <p>Ингредиенты: {{ props.dish.ingredients }}</p>
    <p class="my-4">Цена: {{ props.dish.price }}</p>
  </div>
</template>