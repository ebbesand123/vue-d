<template>
  <span>cameraPerspective: {{ cameraPerspective }}</span>
  <span>cameraPosition: {{ cameraPosition }}</span>
  <n-button @click="changeBackground">Change background color</n-button>
  <div id="canvas"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useSceneCreator } from "@/composables/useSceneCreator";
import { NButton } from "naive-ui";
import { Camera, Object3D, type Renderer, type Scene } from "three";

let scene: Scene | null;
let camera: Camera | null;
let cube: Object3D | null;
let renderer: Renderer | null;

const {
  initCanvas,
  changeSceneBackground,
  createCamera,
  createScene,
  createRenderer,
  render,
  cameraPerspective,
  cameraPosition,
  createCube,
  addShape
} = useSceneCreator();

onMounted(() => {
  initCanvas(document.getElementById("canvas"));
  scene = createScene();
  camera = createCamera();
  cube = createCube();
  addShape(scene, cube);
  renderer = createRenderer();
  render(renderer, scene, camera);
})

function changeBackground() {
  if(!scene) throw new Error("SceneIsNull");
  if(!renderer) throw new Error("RendererIsNull");
  if(!camera) throw new Error("CameraIsNull");
  changeSceneBackground(scene, "pink")
  
  render(renderer, scene, camera);
}

</script>
<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
