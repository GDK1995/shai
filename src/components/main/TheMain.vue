<script setup>
import TheMenu from './menu/TheMenu.vue'
import TheOrder from './order/TheOrder.vue'
import { THE_MENU, THE_ORDER, THE_PAYMENT } from "@/store/constants"

const props = defineProps({
  activePage: String
})
</script>

<template>
  <div>
    <TheMenu v-if="props.activePage === THE_MENU"/>
    <TheOrder v-else-if="props.activePage === THE_ORDER"/>
  </div>
</template>