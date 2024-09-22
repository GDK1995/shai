<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/header/TheHeader.vue'
import TheMain from '@/components/main/TheMain.vue'
import { THE_MENU } from "@/store/constants"

const activePage = ref(THE_MENU)
const activatePage = function (item) {
  activePage.value = item
}
</script>

<template>
  <div class="font-mono">
    <TheHeader @active-page="activatePage"/>
    <TheMain :active-page="activePage"/>
  </div>
</template>