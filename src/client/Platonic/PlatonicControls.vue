<template>
  <div class="controls">
    <h2>Controls</h2>
    <n-space vertical justify="center">
      <n-button type="primary" @click="onStart()">Start Animation</n-button>
      <n-button type="tertiary" @click="onStop()">Stop Animation</n-button>
      <n-button type="tertiary" @click="onAddDefaultShapes()"
        >Add Default Shapes</n-button
      >
    </n-space>
    <platonic-shape-controls
      :shapes="useWorld.shapes"
    ></platonic-shape-controls>
  </div>
</template>
<script setup lang="ts">
import { NButton, NSpace } from "naive-ui";
import PlatonicShapeControls from "./PlatonicShapeControls.vue";
import { useWorldStore } from "@client/Stores/world";
const useWorld = useWorldStore();
function onStart() {
  useWorld.startWorld();
}
function onStop() {
  useWorld.stopWorld();
}
function onAddDefaultShapes() {
  useWorld.addDefaultShapes();
}
</script>
<style scoped>
.controls {
  text-align: center;
  max-height: 100vh;
  overflow-y: auto;
}
</style>
