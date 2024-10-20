<script setup>
import OrderList from './OrderList.vue'
import OrderAction from './OrderAction.vue'
import { isConfirmed } from '@/store/order'
</script>

<template>
  <div>
    <OrderList/>
    <OrderAction v-if="isConfirmed"/>
  </div>
</template>
