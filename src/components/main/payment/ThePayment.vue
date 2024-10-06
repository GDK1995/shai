<script setup>
import { ANYTHING_TO_PAY } from '../../../store/constants'
import PaymentQr from './PaymentQr.vue'
import PaymentBill from './PaymentBill.vue'
import EmptyOrder from '@/components/empty/EmptyOrder.vue'

const props = defineProps({
  isConfirmed: {
    type: Boolean,
    default: false,
    required: true
  }
})
</script>

<template>
  <div class="my-12">
    <div
      v-if="props.isConfirmed"
      class="flex gap-4 my-12">
      <PaymentBill class="flex-auto"/>
      <PaymentQr class="flex-auto"/>
    </div>
    <empty-order v-else>
      <p>{{ ANYTHING_TO_PAY }}</p>
    </empty-order>
  </div>
</template>
