<template>
  <div id="canvas"></div>
</template>

<script setup lang="ts">
import { World } from '@/world/world';
import { onMounted } from 'vue';

let world: World;
let container: HTMLElement | null;

onMounted(() => {
  container = document.getElementById("canvas");
  if (!container) return;
  
  world = new World(container);
  world.render();
})
</script>
<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
