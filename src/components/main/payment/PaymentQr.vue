<script setup>
import QrGenerate from './QrGenerate.vue'
import { CURRENCY, NEED_TO_PAY, PAY_CARD, PAY_CASH } from '../../../store/constants'
import { totalSum } from '@/store/functions'
import { pay } from '../../../store/order'
import BaseButtonPink from '@/components/bases/BaseButtonPink.vue'

const totalPrice = totalSum()
const payArr = [PAY_CASH, PAY_CARD]
</script>

<template>
  <div class="flex flex-col flex-grow items-center gap-8">
    <QrGenerate class=""/>
    <div class="flex">
      <p>{{ NEED_TO_PAY }}:</p>
      <p>{{ totalPrice }} {{ CURRENCY }}</p>
    </div>
    <div v-for="(item, index) in payArr" :key="item + index">
      <BaseButtonPink @click="pay">
        <div class="flex">
          <p>{{ item }}</p>
          <img v-if="index === 1" class="h-5 my-auto ml-2" src="/img/vizza_large.png" alt="card">
        </div>
      </BaseButtonPink>
    </div>
  </div>
</template>
