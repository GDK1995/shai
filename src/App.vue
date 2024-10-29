<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/header/TheHeader.vue'
import TheMain from '@/components/main/TheMain.vue'
import { THE_MENU, NAVLIST } from "@/store/constants"

// functions
const normalizePageHash = function () {
  const hash = window.location.hash.slice(1)

  if (Object.keys(NAVLIST).includes(hash)) {
    return hash
  }

  window.location.hash = THE_MENU
  return THE_MENU
}

const activePage = ref(normalizePageHash())

const activatePage = function (item) {
  activePage.value = item
}
</script>

<template>
  <div class="font-mono h-screen">
    <TheHeader @active-page="activatePage"/>
    <TheMain :active-page="activePage"/>
  </div>
</template>
