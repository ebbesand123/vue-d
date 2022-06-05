<template>
  <n-grid class="grid" :cols="24">
    <n-grid-item :span="4" class="output">
      <h1>Platonic</h1>
      <h2>Changes Output</h2>
      {{ changes }}
    </n-grid-item>
    <n-grid-item class="tv" :span="16">
      <platonic-scene />
    </n-grid-item>
    <n-grid-item :span="4">
      <platonic-controls
        @options-updated="(value) => (changes = value)"
      ></platonic-controls>
    </n-grid-item>
  </n-grid>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
import { NGrid, NGridItem } from "naive-ui";
import { type ShapeOptions } from "@world/global/interfaces";
import PlatonicScene from "@client/Platonic/PlatonicScene.vue";
import PlatonicControls from "@client/Platonic/PlatonicControls.vue";

let changes: Ref<ShapeOptions | null> = ref(null);
</script>
<style scoped>
.grid {
  height: 100%;
  text-align: center;
}
</style>
