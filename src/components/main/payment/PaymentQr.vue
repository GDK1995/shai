<script setup>
import { ref } from 'vue'
import QrGenerate from './QrGenerate.vue'
import { pay } from '../../../store/order'
import { totalSum } from '@/store/functions'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import BaseButtonPink from '@/components/bases/BaseButtonPink.vue'
import ModalComponent from '@/components/modal/ModalComponent.vue'
import { CURRENCY, NEED_TO_PAY, PAY_CARD, PAY_CASH, PAYMENT_SUCCESS } from '../../../store/constants'

const totalPrice = totalSum()
const payArr = [PAY_CASH, PAY_CARD]

const isOpen = ref(false)

const openModal = function () {
  isOpen.value = true
}

const closeModal = function () {
  isOpen.value = false
}

const resetPay = function () {
  closeModal()
  pay()
}
</script>

<template>
  <div class="flex flex-col flex-grow items-center gap-8">
    <QrGenerate class=""/>
    <div class="flex">
      <p>{{ NEED_TO_PAY }}:</p>
      <p>{{ totalPrice }} {{ CURRENCY }}</p>
    </div>
    <div v-for="(item, index) in payArr" :key="item + index">
      <BaseButtonPink @click="openModal">
        <div class="flex">
          <p>{{ item }}</p>
          <img v-if="index === 1" class="h-5 my-auto ml-2" src="/img/vizza_large.png" alt="card">
        </div>
      </BaseButtonPink>
    </div>
    <modal-component
      v-if="isOpen"
      @close-modal="resetPay"
      class="flex text-center">
      <CheckCircleIcon class="h-20 text-green-500 m-auto"/>
      <p class="mt-7">{{ PAYMENT_SUCCESS }}</p>
    </modal-component>
  </div>
</template>
