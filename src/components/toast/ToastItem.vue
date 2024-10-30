<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
import BaseButtonIcon from '@/components/bases/BaseButtonIcon.vue'
import { TOAST_STATUS, TIME_OUT } from '@/store/constants'
import { statusOfToast, resetToast } from '@/store/toast'

const classList = `fixed top-5 right-5 p-4 z-50 rounded text-white ${TOAST_STATUS[statusOfToast.value]}`

setTimeout(() => resetToast(), TIME_OUT)
</script>

<template>
  <div :class="`${classList}`">
    <div class="flex gap-2">
      <slot></slot>
      <base-button-icon @click="resetToast" class="top-3 end-2.5 bg-transparent hover:bg-gray-100 hover:text-gray-900 justify-center items-center">
        <XMarkIcon class="h-5 text-grey-500"/>
      </base-button-icon>
    </div>
  </div>
</template>