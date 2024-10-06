<script setup>
import QrGenerate from './QrGenerate.vue'
import { NEED_TO_PAY } from '../../../store/constants'
</script>

<template>
  <div class="flex flex-col flex-grow items-center gap-8">
    <QrGenerate class=""/>
    <div class="flex">
      <p>{{ NEED_TO_PAY }}:</p>
      <p></p>
    </div>
  </div>
</template>
