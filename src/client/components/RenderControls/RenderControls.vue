<template>
  <div>
    <h3>Render Controls</h3>
    <n-space vertical justify="center">
      <n-button
        class="button"
        :disabled="useWorld.isRendering"
        type="primary"
        @click="onStart()"
        >Start Rendering</n-button
      >
      <n-button
        class="button"
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
import { useWorldStore } from "@client/stores/world";
const useWorld = useWorldStore();
function onStart() {
  useWorld.startWorld();
}
function onStop() {
  useWorld.stopWorld();
}
</script>
<style scoped>
.button {
  width: 100%;
}
</style>
