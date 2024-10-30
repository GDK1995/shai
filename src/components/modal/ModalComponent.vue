<script setup>
import { ref } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import BaseButtonIcon from '@/components/bases/BaseButtonIcon.vue'
import { TIME_OUT } from '@/store/constants'

const emit = defineEmits(['close-modal'])

const closeModal = function () {
  emit('close-modal')
}
</script>

<template>
  <div class="fixed top-0 right-0 left-0 z-50 flex h-full max-h-full w-full">
    <div class="fixed opacity-80 top-0 right-0 left-0 inset-0 bg-gray-300"></div>
    <div class="relative transition-all duration-1000 ease-in p-4 w-full max-w-md max-h-full m-auto">
      <div class="relative bg-white rounded-lg p-10 opacity-100">
        <base-button-icon @click="closeModal" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 justify-center items-center">
          <XMarkIcon class="h-5 text-grey-500"/>
        </base-button-icon>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
