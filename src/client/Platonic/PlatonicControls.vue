<template>
  <div class="controls">
    <h2>Controls</h2>
    <n-space vertical justify="center">
      <n-button type="primary" @click="onAnimate('start')"
        >Start Animation</n-button
      >
      <n-button type="tertiary" @click="onAnimate('stop')"
        >Stop Animation</n-button
      >
    </n-space>
    <platonic-shape-controls
      :shapes="world.shapeObjects"
    ></platonic-shape-controls>
  </div>
</template>
<script setup lang="ts">
import { NButton, NSpace } from "naive-ui";
import { useWorldStore } from "@client/Stores/world";
import PlatonicShapeControls from "./PlatonicShapeControls.vue";

const world = useWorldStore();
function onAnimate(name: string) {
  window.dispatchEvent(new Event(name));
}
</script>
<style scoped>
.controls {
  text-align: center;
  max-height: 100vh;
  overflow-y: auto;
}
</style>
