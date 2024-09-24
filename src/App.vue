<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/header/TheHeader.vue'
import TheMain from '@/components/main/TheMain.vue'
import { THE_MENU } from "@/store/constants"

// vars
const activePage = ref(THE_MENU)

// functions
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
