<script setup lang="ts">
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { onMounted } from "vue";

function init(): void {
  const container = document.getElementById("canvas");
  if (container === null) {
    throw new Error("InitFailureExcepetion");
  }
  const scene = new Scene();
  scene.background = new Color("black");

  // Create a camera
  const fov = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane

  const camera = new PerspectiveCamera(fov, aspect, near, far);
  // every object is initially created at ( 0, 0, 0 )
  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);
  // add the mesh to the scene
  scene.add(cube);
  // create the renderer
  const renderer = new WebGLRenderer();

  // next, set the renderer to the same size as our container element
  renderer.setSize(container.clientWidth, container.clientHeight);

  // finally, set the pixel ratio so that our scene will look good on HiDPI displays
  renderer.setPixelRatio(window.devicePixelRatio);

  // add the automatically created <canvas> element to the page
  container.append(renderer.domElement);

  // render, or 'create a still image', of the scene
  renderer.render(scene, camera);
  console.log("init done");
}

onMounted(() => {
  init();
});
</script>

<template>
  <div id="canvas"></div>
</template>

<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
