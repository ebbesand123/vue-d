<template>
  <p>Mouse Position</p>
  <span>X: {{ mouse.x }} Y: {{ mouse.y }}</span>
  <div id="canvas"></div>
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
import { useMouse } from "./composables/mouse";
import { useCameraStore } from "@/stores/camera";

const props = defineProps({
  backgroundColor: {
    type: String,
    default: "grey"
  },
})

const mouse = useMouse();
const { position, perspective } = useCameraStore();

let container: HTMLElement | null;
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
  if(!container) throw new Error('ContainerNotFound');
  perspective.aspect = container.clientWidth / container.clientHeight;
  camera = new PerspectiveCamera(perspective.fov, perspective.aspect, perspective.near, perspective.far);
  camera.position.set(position.x, position.y, position.z);
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
