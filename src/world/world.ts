import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCube } from "@world/components/shapes/box";
import { createCamera } from "@world/components/camera";
import { createDodecahedron } from "@world/components/shapes/dodecahedron";
import { createIcosahedron } from "@world/components/shapes/icosahedron";
import { createOctahedron } from "@world/components/shapes/octahedron";
import {
  createDirectionalLight,
  createDirectionalLightHelper,
} from "@world/components/light";
import { createScene } from "@world/components/scene";
// import { createSphere } from "@world/components/shapes/sphere";
import { createTetrahedron } from "@world/components/shapes/tetrahedron";
import { Loop } from "@world/systems/Loop";
import { createRenderer } from "@world/systems/renderer";
import { Resizer } from "@world/systems/Resizer";
import { UpdatableCamera } from "@world/global/classes";
import { createGridHelper } from "@world/global/helpers";

interface IWorld {
  container: HTMLElement;
  camera: PerspectiveCamera | UpdatableCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  resizer: Resizer;
  // light: AmbientLight;
  generateShapes(): void;
  render(): void;
  destroy(): void;
  start(): void;
  stop(): void;
}

class World implements IWorld {
  camera: UpdatableCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  container: HTMLElement;
  loop: Loop;
  resizer: Resizer;
  // light: AmbientLight;

  constructor(container: HTMLElement) {
    if (container === null) throw new Error("ProvidedContainerIsNull");
    this.container = container;
    this.camera = createCamera(container, undefined, { x: 0, y: 0, z: 30 });
    this.scene = createScene("turquoise");
    const light = createDirectionalLight(undefined, 8, {
      x: 0,
      y: 5,
      z: 0,
    });
    const lighthelper = createDirectionalLightHelper(light, 1);
    this.scene.add(light);
    this.scene.add(lighthelper);
    this.renderer = createRenderer(container);
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.container.append(this.renderer.domElement);
    this.resizer = new Resizer(container, this.camera, this.renderer);
    this.loop.updatables.push(this.camera);
    this.scene.add(createGridHelper());
  }

  generateShapes() {
    const shapes = [];
    shapes.push(createCube(undefined, { x: 1, y: -1, z: -12.5 }));
    shapes.push(createTetrahedron(undefined, { x: -3, y: -2, z: -4 }));
    shapes.push(createIcosahedron(undefined, { x: -2.2, y: 2, z: 0 }));
    shapes.push(createDodecahedron(undefined, { x: -3, y: 0, z: -2 }));
    shapes.push(createOctahedron(undefined, { x: 3, y: 2, z: -3 }));
    shapes.forEach((shape) => {
      this.scene.add(shape);
      this.loop.updatables.push(shape);
    });
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  destroy(): void {
    this.renderer.dispose();
  }

  start(): void {
    this.loop.start();
  }

  stop(): void {
    this.loop.stop();
  }
}

export { World };
