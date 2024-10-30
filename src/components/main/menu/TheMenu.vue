<script setup>
import { ref, computed } from 'vue'
import TheMenuInfo from './TheMenuInfo.vue'
import TheMenuList from './TheMenuList.vue'

// vars
const dishItem = ref({})
const isDishSelected = ref(false)

// functions
const selects = function (e) {
  dishItem.value = e
  isDishSelected.value = true
}

const clearingDish = function () {
  dishItem.value = {}
  isDishSelected.value = false
}

const classList = computed(() => {
  return isDishSelected.value ? 'w-full lg:w-1/3 fixed lg:static lg:flex-none z-10 lg:z-0 b-0 r-0' : 'hidden lg:block h-0 lg:w-0 lg:h-full'
})

const screenLess = computed(() => {
  return window.screen.width < 1024 && isDishSelected.value
})
</script>

<template>
  <div class="flex flex-col lg:flex-row relative">
    <TheMenuList
      @selected-dish="selects($event)"
      :class="{'absolute': screenLess}"/>
    <TheMenuInfo
      @clear-dish="clearingDish"
      class="transition-all duration-1000 ease-in"
      :dish="dishItem"
      :class="`${classList}`"/>
  </div>
</template>
