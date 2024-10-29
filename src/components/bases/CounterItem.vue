<script setup>
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/vue/24/solid'
import { isCounterValid } from '@/store/validator'

// emits and props
const emit = defineEmits(['set-count'])

const props = defineProps({
  count: {
    type: Number,
    validator: isCounterValid
  }
})

// functions
const setCount = function (act) {
  emit('set-count', act)
}
</script>

<template>
  <div>
    <MinusCircleIcon @click="setCount('decrease')" class="h-7 cursor-pointer active:text-pink-50"/>
      <p class="m-auto">{{ props.count }}</p>
    <PlusCircleIcon @click="setCount('increase')" class="h-7 cursor-pointer active:text-pink-50"/>
  </div>
</template>