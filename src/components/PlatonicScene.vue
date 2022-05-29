<template>
  <div id="canvas"></div>
</template>

<script setup lang="ts">
import { World } from '@/world/world';
import { onBeforeUnmount, onMounted } from 'vue';

let world: World;
let container: HTMLElement | null;

onMounted(() => {
  container = document.getElementById("canvas");
  if (!container) throw new Error("ContainerIsNull");

  world = new World(container);
  world.generateShapes();
  world.render();
})

onBeforeUnmount(() => {
  world.destroy();
})
</script>
<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
