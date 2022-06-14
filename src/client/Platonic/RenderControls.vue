<template>
  <h2>Render Controls</h2>
  <div class="render-controls">
    <n-space vertical justify="center">
      <n-button
        :disabled="useWorld.isRendering"
        type="primary"
        @click="onStart()"
        >Start Rendering</n-button
      >
      <n-button
        :disabled="!useWorld.isRendering"
        type="tertiary"
        @click="onStop()"
        >Stop Rendering</n-button
      >
    </n-space>
  </div>
</template>
<script setup lang="ts">
import { NButton, NSpace } from "naive-ui";
import { useWorldStore } from "@client/Stores/world";
const useWorld = useWorldStore();
function onStart() {
  useWorld.startWorld();
}
function onStop() {
  useWorld.stopWorld();
}
</script>
<style scoped>
.render-controls {
  text-align: center;
  max-height: 10vh;
  overflow-y: auto;
}
</style>
