import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createBox, createCube } from "@world/components/shapes/box";
import { createCamera } from "@world/components/shapes/camera";
import { createDodecahedron } from "@world/components/shapes/dodecahedron";
import { createIcosahedron } from "@world/components/shapes/icosahedron";
import { createDirectionalLight } from "@world/components/shapes/light";
import { createScene } from "@world/components/shapes/scene";
import { createSphere } from "@world/components/shapes/sphere";
import { createTetrahedron } from "@world/components/shapes/tetrahedron";
import { Loop } from "@world/systems/Loop";
import { createRenderer } from "@world/systems/renderer";
import { Resizer } from "@world/systems/Resizer";

interface IWorld {
  container: HTMLElement;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  // light: AmbientLight;

  generateShapes(): void;
  render(): void;
  destroy(): void;
}

class World implements IWorld {
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  container: HTMLElement;
  loop: Loop;
  // light: AmbientLight;

  constructor(container: HTMLElement) {
    if (container === null) throw Error("ProvidedContainerIsNull");
    this.container = container;
    this.camera = createCamera(container);
    this.scene = createScene();
    const light = createDirectionalLight();
    this.scene.add(light);
    this.renderer = createRenderer(container);
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.container.append(this.renderer.domElement);
    // eslint-disable-next-line
    const resizer = new Resizer(container, this.camera, this.renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  generateShapes() {
    const shapes = [];
    shapes.push(createCube());
    shapes.push(
      createBox({ width: 3, height: 1, depth: 2 }, { x: 3, y: 0, z: 0 })
    );
    shapes.push(createTetrahedron(undefined, { x: -3, y: -2, z: -4 }));
    shapes.push(createIcosahedron(undefined, { x: -4, y: 2, z: 0 }));
    shapes.push(
      createSphere(
        { radius: 1, widthSegments: 16, heightSegments: 16 },
        { x: 0.5, y: 2, z: 0 }
      )
    );
    shapes.push(createDodecahedron(undefined, { x: -3, y: 2, z: -3 }));

    // Add every shape to scene
    shapes.forEach((shape) => {
      this.scene.add(shape);
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
