<script setup>
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
import { QR_SIZE } from '../../../store/constants'

let value = ref('500')
</script>

<template>
  <div>
    <qrcode-vue :value="value" :size="QR_SIZE" level="H" render-as="svg" />
  </div>
</template>
