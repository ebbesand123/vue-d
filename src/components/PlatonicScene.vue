<template>
  <div id="canvas" />
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const props = defineProps({
  backgroundColor: {
    type: String,
    default: "grey"
  },
  far: {
    type: Number,
    default: 100
  },
  fov: {
    type: Number,
    default: 35
  },
  near: {
    type: Number,
    default: 0.1
  },
  cameraPos: {
    type: Object,
    default: {
      x: 0,
      y: 0,
      z: 1
    }
  }
})

let container: HTMLElement | null;
let aspect: number | null;
let scene: Scene | null;
let renderer: WebGLRenderer | null;
let camera: PerspectiveCamera | null;

onMounted(() => {
  initCanvas();
  createScene();
  createCamera();
  createCube();
  createRenderer();
  render();
})

function initCanvas() {
  container = document.getElementById("canvas");
  if (!container) throw new Error("CanvasNotFound");
}

function createScene() {
  scene = new Scene();
  scene.background = new Color(props.backgroundColor);
}

function createCamera() {
  const { cameraPos, far, fov, near } = props;
  if (!container) throw new Error("ContainerNotFound");
  if (!cameraPos) throw new Error("CameraPositionUndefined");
  aspect = container.clientWidth / container.clientHeight;
  camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z);
}

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = new MeshBasicMaterial();
  const cube = new Mesh(geometry, material);
  if (!scene) throw new Error("SceneNotFound");
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
  if (!scene) throw new Error("SceneNotFound");
  if (!camera) throw new Error("CameraNotFound");
  if (!renderer) throw new Error("RendererNotFound");
  // render, or 'create a still image', of the scene
  renderer.render(scene, camera);
}
</script>
<style>
#canvas {
  width: 100%;
  height: 100%;
}
</style>
