<script setup>
import { NAVLIST } from "@/store/constants";

// emits
const emit = defineEmits(['active-page'])

//functions
const activatePage = function (value) {
  emit('active-page', value)
}
</script>

<template>
  <div>
    <a
      v-for="nav, value in NAVLIST"
      :key="nav"
      :href="`#${value}`"
      class="mx-2"
      @click="activatePage(value)">
      {{ nav }}
    </a>
  </div>
</template>
