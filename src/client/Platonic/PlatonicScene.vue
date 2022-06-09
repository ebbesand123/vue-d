<template>
  <div id="canvas"></div>
</template>
<script setup lang="ts">
import { World } from "@world/world";
import { onBeforeUnmount, onMounted } from "vue";
import { useWorldStore } from "@client/Stores/world";
const worldStore = useWorldStore();

let world: World;
let container: HTMLElement | null;
let shapes = [];

// Global world events
window.addEventListener("start", () => {
  world.start();
});
window.addEventListener("stop", () => {
  world.stop();
});
window.addEventListener("worldShapesDeleted", () => {
  const result = world.deleteShapes(worldStore.shapeObjects);
  console.log("ShapeDeletionSuccess?: ", result);
});
onMounted(() => {
  container = document.getElementById("canvas");
  if (!container) throw new Error("ContainerIsNull");
  world = new World(container);
  loadWorld();
});

onBeforeUnmount(() => {
  world.destroy();
});

function loadWorld() {
  shapes = worldStore.getDefaultShapes();
  worldStore.shapeObjects = shapes;
  console.log(`Add to to worldStore: ${shapes}`);
  world.addShapes(shapes);
}
</script>
<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
