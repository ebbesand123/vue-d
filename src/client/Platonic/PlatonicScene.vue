<template>
  <div id="canvas"></div>
</template>
<script setup lang="ts">
import { World } from "@world/world";
import { onBeforeUnmount, onMounted } from "vue";
import { useWorldStore } from "@client/Stores/world";
const useWorld = useWorldStore();

let world: World;
let container: HTMLElement | null;

onMounted(() => {
  container = document.getElementById("canvas");
  if (!container) throw new Error("ContainerIsNull");
  world = new World(container);
  useWorld.setWorld(world);
  useWorld.startWorld();
  useWorld.addDefaultShapes();
});

onBeforeUnmount(() => {
  world.destroy();
});
</script>
<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
