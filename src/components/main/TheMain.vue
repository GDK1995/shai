<script setup>
import { ref } from 'vue'
import TheMenuList from './TheMenuList.vue'
import TheMenuInfo from './TheMenuInfo.vue'

const dishItem = ref({})
const isDishSelected = ref(false)
const selects = function (e) {
  dishItem.value = e
  isDishSelected.value = true
}
</script>

<template>
  <div>
    <div class="flex">
      <TheMenuList
        @selected-dish="selects($event)"/>
      <TheMenuInfo
        :dish="dishItem"
        :class="{'flex-none w-1/3' : isDishSelected}"/>
    </div>
  </div>
</template>