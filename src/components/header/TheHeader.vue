<script setup>
import TheLogo from "./TheLogo.vue"
import TheNav from "./TheNav.vue"

// emits
const emit = defineEmits(['active-page'])

// functions
const activatePage = function (value) {
  emit('active-page', value)
}
</script>

<template>
  <header class="sticky top-0 z-20 px-6 py-2 border-b flex items-center justify-around bg-white">
    <TheLogo />
    <TheNav
      @active-page="activatePage"/>
  </header>
</template>