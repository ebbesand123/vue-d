<script setup lang="ts">
import { NGrid, NGridItem } from "naive-ui";
import PlatonicScene from "@client/Platonic/PlatonicScene.vue";
</script>

<template>
  <h1>Platonic</h1>
  <n-grid class="grid" :cols="24">
    <n-grid-item class="tv" :offset="2" :span="20">
      <platonic-scene />
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
h1 {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  right: 50%;
  text-align: center;
}
.grid {
  height: 100%;
}
</style>
