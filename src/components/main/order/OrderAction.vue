<script setup>
import { onMounted } from 'vue'
import { prepeare, prepAct } from '@/store/order'
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
  <div class="flex flex-col relative items-center mt-8">
    <div class="flex flex-row w-4/5 justify-between z-10">
      <ArrowPathIcon
        class="h-10 text-pink-500"
        :class="{'animate-spin': prepeare === 'w-0'}"/>
      <FireIcon
        class="h-10 text-pink-500"
        :class="{'animate-wiggle': prepeare === 'w-1/2'}"/>
      <CheckCircleIcon class="h-10 text-pink-500"/>
    </div>
    <div class="bg-gray-300 h-1 w-4/5 rounded-full relative">
      <span
        :class="`bg-pink-400 h-1 absolute left-0 top-0 rounded-full transition-width duration-500 ease-in ${prepeare}`"></span>
    </div>
  </div>
</template>