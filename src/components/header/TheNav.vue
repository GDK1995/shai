<script setup>
import { inject } from 'vue'
import { NAVLIST } from "@/store/constants"
import { PAGE_KEY } from '@/store/keys'

// emits
const emit = defineEmits(['active-page'])

const page = inject(PAGE_KEY)

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
      :class="{'font-semibold': page === value}"
      @click="activatePage(value)">
      {{ nav }}
    </a>
  </div>
</template>
