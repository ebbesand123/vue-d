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

export interface CameraPosition {
  x: number
  y: number
  z: number
}

export interface PlatonicScene {
  backgroundColor: string
  fov: number
  far: number
  near: number
  cameraPos: CameraPosition
}

const props = withDefaults(defineProps<PlatonicScene>(), {
  backgroundColor: "black",
  fov: 35,
  far: 100,
  near: 0.1,
  camerPos: {
    x: 0,
    y: 0,
    z: 10
  }
})

let container: HTMLElement | null;
let aspect: number | null;
let scene: Scene | null;
let renderer: WebGLRenderer | null;
let camera: PerspectiveCamera | null;

function init() {
  container = document.getElementById("canvas");
  if (!container) throw new Error("InitFailureExcepetion");
}

function createScene() {
  scene = new Scene();
  scene.background = new Color(props.backgroundColor);
}

function createCamera() {
  const { fov, near, far } = props;
  if (!container) throw new Error("ContainerIsNullExcepetion");
  aspect = container.clientWidth / container.clientHeight;
  camera = new PerspectiveCamera(fov, aspect, near, far);
  // every object is initially created at ( 0, 0, 0 )
  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
}

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);

  if (!scene) throw new Error("SceneNotFoundException");
  scene.add(cube);

}

function createRenderer() {
  if (!container) throw new Error("ContainerNotFoundException");
  renderer = new WebGLRenderer();
  // next, set the renderer to the same size as our container element
  renderer.setSize(container.clientWidth, container.clientHeight);
  // finally, set the pixel ratio so that our scene will look good on HiDPI displays
  renderer.setPixelRatio(window.devicePixelRatio);
  // add the automatically created <canvas> element to the page
  container.append(renderer.domElement);
}

function render() {
  if (!scene) throw new Error("SceneNotFoundException");
  if (!camera) throw new Error("CameraNotFoundException");
  if (!renderer) throw new Error("RendererNotFoundException");
  // render, or 'create a still image', of the scene
  renderer.render(scene, camera);
}

onMounted(() => {
    init();
    createScene();
    createCamera();
    createCube();
    createRenderer();
    render();
})

</script>

<template>
  <div id="canvas" />
</template>

<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
