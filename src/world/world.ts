import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCamera } from "@world/components/camera";
import {
  createDirectionalLight,
  createDirectionalLightHelper,
} from "@world/components/light";
import { createScene } from "@world/components/scene";
// import { createSphere } from "@world/components/shapes/sphere";
import { Loop } from "@world/systems/Loop";
import { createRenderer } from "@world/systems/renderer";
import { Resizer } from "@world/systems/Resizer";
import { UpdatableCamera, UpdatableObject } from "@world/global/classes";
import { createGridHelper } from "@world/global/helpers";

interface IWorld {
  container: HTMLElement;
  camera: PerspectiveCamera | UpdatableCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  resizer: Resizer;
  // light: AmbientLight;
  addShapes(shapes: UpdatableObject[]): void;
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
    this.scene.add(light);
    this.renderer = createRenderer(container);
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.container.append(this.renderer.domElement);
    this.resizer = new Resizer(container, this.camera, this.renderer);
    this.loop.updatables.push(this.camera);

    // Add visual helpers
    const lighthelper = createDirectionalLightHelper(light, 1);
    this.scene.add(createGridHelper());
    this.scene.add(lighthelper);

    // render
    this.renderer.render(this.scene, this.camera);
  }

  addShapes(shapes: UpdatableObject[]): void {
    shapes.forEach((shape) => {
      this.scene.add(shape);
      this.loop.updatables.push(shape);
    });
  }

  deleteShapes(shapes: UpdatableObject[]): boolean {
    console.log("Trying to clear scene...");
    shapes.forEach((shape) => {
      shape.removeFromParent();
    });

    return true;
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  destroy(): void {
    window.removeEventListener("start", () => {
      this.start();
    });
    window.removeEventListener("stop", () => {
      this.stop();
    });
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
