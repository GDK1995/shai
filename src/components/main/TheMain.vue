<script setup>
import TheMenu from './menu/TheMenu.vue'
import TheOrder from './order/TheOrder.vue'
import ThePayment from './payment/ThePayment.vue'
import { isPageValidator } from '@/store/validator'
import { THE_MENU, THE_ORDER, NAVLIST } from "@/store/constants"

// emits and props
const props = defineProps({
  activePage: {
    type: String,
    required: true,
    validator: isPageValidator
  }
})
</script>

<template>
  <main>
    <TheMenu v-if="props.activePage === THE_MENU"/>
    <TheOrder v-else-if="props.activePage === THE_ORDER"/>
    <ThePayment v-else/>
  </main>
</template>
