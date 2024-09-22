<script setup>
import { NAVLIST } from "@/store/constants";
</script>

<template>
  <div>
    <a
      v-for="nav, value in NAVLIST"
      :key="nav"
      :href="`#${value}`"
      class="font-mono mx-2">
      {{ nav }}
    </a>
  </div>
</template>
