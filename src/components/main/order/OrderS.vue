<script setup>
import { inject } from 'vue'
import BaseButtonPink from '../../bases/BaseButtonPink.vue'
import OrderAction from './OrderAction.vue'
import OrderList from './OrderList.vue'
import { ACTIVATE_PAGE_KEY } from '@/store/keys'
import { setHash } from '@/store/functions'
import { confirmOrder, isConfirmed, isDone } from '@/store/order'
import { ORDER_TEXT, CONFIRM_ORDER, PAY_ORDER, THE_PAYMENT } from '../../../store/constants'

const setPage = inject(ACTIVATE_PAGE_KEY)



const goToPayment = () => {
  setPage(THE_PAYMENT)
  setHash(THE_PAYMENT)
}
</script>

<template>
  <div class="flex flex-col text-center items-center">
    <p class="text-2xl">{{ ORDER_TEXT }}</p>
    <OrderAction
      class="transition-all duration-500 ease-in mb-5"
      :class="[!isConfirmed ? 'h-0 opacity-0' : 'h-9 opacity-100']"/>
    <OrderList />
    <div v-if="!isConfirmed || isDone && isConfirmed">
      <BaseButtonPink @click="isConfirmed ? goToPayment() : confirmOrder()" class="w-52">
        <p v-if="!isConfirmed">{{ CONFIRM_ORDER }}</p>
        <p v-if="isDone && isConfirmed">{{ PAY_ORDER }}</p>
      </BaseButtonPink>
    </div>
  </div>
</template>
