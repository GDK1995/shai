<script setup>
const props = defineProps({
  orderList: Array
})
</script>

<template>
  <div>
    {{ props.orderList }}
  </div>
</template>