<script setup>
import { onMounted } from 'vue'
import { prepeare, prepAct } from '@/store/order'
import { ORDER_ACCEPT, COOKING, DONE } from '@/store/constants'
import { CheckCircleIcon, ArrowPathIcon, FireIcon } from '@heroicons/vue/24/solid'

const percentage = function () {
  prepeare.value !== 'w-full' ? prepAct() : intervalClear()
}

const setInter = setInterval(() => percentage(), 5000)

const intervalClear = function () {
  clearInterval(setInter)
}

onMounted(() => {
  setInter
})
</script>

<template>
  <div class="flex flex-col relative items-center mt-8 w-4/5">
    <div class="flex flex-row justify-between w-4/5 z-10 text-xs text-pink-200">
      <div class="flex flex-col">
        <ArrowPathIcon
          class="h-10 text-pink-500"
          :class="{'animate-spin': prepeare === 'w-0'}"/>
        <p>{{ ORDER_ACCEPT }}</p>
      </div>
      <div class="flex flex-col">
        <FireIcon
          class="h-10 text-pink-500"
          :class="{'animate-wiggle': prepeare === 'w-1/2'}"/>
        <p>{{ COOKING }}</p>
      </div>
      <div class="flex flex-col">
        <CheckCircleIcon class="h-10 text-pink-500"/>
        <p>{{ DONE }}</p>
      </div>
    </div>
    <div class="bg-gray-400 h-1 w-4/5 rounded-full relative">
      <span :class="`bg-pink-400 h-1 absolute left-0 top-0 rounded-full transition-width duration-500 ease-in ${prepeare}`"></span>
    </div>
  </div>
</template>