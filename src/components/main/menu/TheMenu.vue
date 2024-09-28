<script setup>
import { ref } from 'vue'
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
</script>

<template>
  <div class="flex">
    <TheMenuList
      @selected-dish="selects($event)"/>
    <TheMenuInfo
      v-show="isDishSelected"
      @clear-dish="clearingDish"
      :dish="dishItem"
      :class="{'flex-none w-1/3' : isDishSelected}"/>
  </div>
</template>
