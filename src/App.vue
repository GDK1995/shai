<script setup>
import { ref, provide } from 'vue'
import TheHeader from '@/components/header/TheHeader.vue'
import TheMain from '@/components/main/TheMain.vue'
import ToastItem from '@/components/toast/ToastItem.vue'
import { normalizePageHash } from "@/store/functions"
import { TOAST_TEXT } from '@/store/toast'
import { PAGE_KEY } from '@/store/keys'

const activePage = ref(normalizePageHash())

// function to set page
const activatePage = function (item) {
  activePage.value = item
}

provide(PAGE_KEY, activePage)
</script>

<template>
  <div class="font-mono h-screen">
    <ToastItem v-if="TOAST_TEXT">
      <p class="m-auto">{{ TOAST_TEXT }}</p>
    </ToastItem>
    <TheHeader @active-page="activatePage"/>
    <TheMain :active-page="activePage"/>
  </div>
</template>
