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
      <n-button @click="world.disposeShapes()">disposeShapes</n-button>
      <n-button @click="onDefault()">Default Shapes</n-button>
    </n-space>
    <platonic-shape-controls
      :shapes="world.shapeObjects"
    ></platonic-shape-controls>
    <div>Stored objects: {{ world.shapeObjects }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
import { NButton, NSpace } from "naive-ui";
import { useWorldStore } from "@client/Stores/world";
import { UpdatableObject } from "@world/global/classes";
import PlatonicShapeControls from "./PlatonicShapeControls.vue";

const world = useWorldStore();
const fetchedObjs: Ref<UpdatableObject[]> = ref([]);
function onDefault() {
  fetchedObjs.value = world.getDefaultShapes();
  world.shapeObjects = fetchedObjs.value;
}
function onAnimate(name: string) {
  window.dispatchEvent(new Event(name));
}
</script>
<style>
.controls {
  text-align: center;
  max-height: 100vh;
  overflow-y: auto;
}
</style>
