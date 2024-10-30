<script setup>
import { ANYTHING_TO_PAY } from '../../../store/constants'
import { isConfirmed } from '../../../store/order'
import PaymentQr from './PaymentQr.vue'
import PaymentBill from './PaymentBill.vue'
import EmptyOrder from '@/components/empty/EmptyOrder.vue'
</script>

<template>
  <div class="my-12">
    <div
      v-if="isConfirmed"
      class="flex flex-col lg:flex-row gap-4 my-12">
      <PaymentBill class="flex-auto order-2 lg:order-1"/>
      <PaymentQr class="flex-auto order-1 lg:order-2"/>
    </div>
    <empty-order v-else>
      <p>{{ ANYTHING_TO_PAY }}</p>
    </empty-order>
  </div>
</template>
