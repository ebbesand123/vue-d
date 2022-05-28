import { ref } from "vue";
import { BoxBufferGeometry, Camera, Color, Mesh, MeshBasicMaterial, Object3D, PerspectiveCamera, Scene, WebGLRenderer, type Renderer } from "three";

export interface Position {
  x: number
  y: number
  z: number
}

export interface Perspective {
  aspect: number
  fov: number
  near: number
  far: number
}

const DEFAULTS = {
  POSITION: { x: 0, y: 0, z: 10 } as Position,
  PERSPECTIVE: { aspect: 1.33, fov: 35, near: 0.1, far: 100 } as Perspective
}

export function useSceneCreator(
  position?: Position,
  perspective?: Perspective,
  color?: string
) {

  const cameraPerspective = ref<Perspective>(DEFAULTS.PERSPECTIVE);
  const cameraPosition = ref<Position>(DEFAULTS.POSITION);
  let backgroundColor = "aqua";
  let container: HTMLElement;

  function initCanvas(target: HTMLElement | null) {
    if(!target) throw new Error("CanvasTargetIsNull");
    container = target;

    return container;
  }

  function createCamera() {
    if (perspective) cameraPerspective.value = perspective;
    if (position) cameraPosition.value = position;

    cameraPerspective.value.aspect = container.clientWidth / container.clientHeight;
    const camera = new PerspectiveCamera(cameraPerspective.value.fov, cameraPerspective.value.aspect, cameraPerspective.value.far, cameraPerspective.value.near);

    camera.position.set(cameraPosition.value.x, cameraPosition.value.y, cameraPosition.value.z);

    return camera;
  }

  function createScene() {
    if (color) backgroundColor = color;
    const scene = new Scene();
    scene.background = new Color(backgroundColor);

    return scene;
  }

  function createCube() {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const material = new MeshBasicMaterial();
    const cube = new Mesh(geometry, material)

    return cube;
  };

  function createRenderer() {
    const renderer = new WebGLRenderer();
    // next, set the renderer to the same size as our container element
    renderer.setSize(container.clientWidth, container.clientHeight);
    // finally, set the pixel ratio so that our scene will look good on HiDPI displays
    renderer.setPixelRatio(window.devicePixelRatio);
    // add the automatically created <canvas> element to the page
    container.append(renderer.domElement);

    return renderer;
  }

  function render(renderer: Renderer,scene: Scene, camera: Camera) {
    renderer.render(scene, camera);
  }

  function addShape(scene: Scene, shape: Object3D) {
    scene.add(shape)
  }

  return { initCanvas, createCamera, createScene, createRenderer, render, cameraPerspective, cameraPosition, createCube, addShape }
}
