<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import BaseButtonIcon from '@/components/bases/BaseButtonIcon.vue'
import { TOAST_STATUS, TOAST_BTTN, TIME_OUT } from '@/store/constants'
import { statusOfToast, resetToast } from '@/store/toast'

const classList = `fixed top-5 right-5 p-4 z-50 rounded text-white ${TOAST_STATUS[statusOfToast.value]}`
const bttnClassList = `top-3 end-2.5 bg-transparent justify-center items-center ${TOAST_BTTN[statusOfToast.value]}`

setTimeout(() => resetToast(), TIME_OUT)
</script>

<template>
  <div :class="`${classList}`">
    <div class="flex gap-2">
      <slot></slot>
      <base-button-icon @click="resetToast" :class="`${bttnClassList}`">
        <XMarkIcon class="h-5 text-grey-500"/>
      </base-button-icon>
    </div>
  </div>
</template>