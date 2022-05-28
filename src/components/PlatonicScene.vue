<template>
  <span>cameraPerspective: {{ cameraPerspective }}</span>
  <span>cameraPosition: {{ cameraPosition }}</span>
  <div id="canvas"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useSceneCreator } from "@/composables/useSceneCreator";

const props = defineProps({
  backgroundColor: {
    type: String,
    default: "grey"
  },
})

let container: HTMLElement | null;

const { initCanvas, createCamera, createScene, createRenderer, render, cameraPerspective, cameraPosition, createCube, addShape } = useSceneCreator();
onMounted(() => {
  container = initCanvas(document.getElementById("canvas"));
  const scene = createScene();
  const camera = createCamera();
  const cube = createCube();
  addShape(scene, cube);
  const renderer = createRenderer();
  render(renderer, scene, camera);
})


</script>
<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
