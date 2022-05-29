import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createBox, createCube } from "./components/box";
import { createCamera } from "./components/camera";
import { createDodecahedron } from "./components/dodecahedron";
import { createIcosahedron } from "./components/icosahedron";
import { createScene } from "./components/scene";
import { createSphere } from "./components/sphere";
import { createTetrahedron } from "./components/tetrahedron";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

interface IWorld {
  container: HTMLElement;
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;

  generateShapes(): void;
  render(): void;
  destroy(): void;
}

class World implements IWorld {
  camera: PerspectiveCamera;
  scene: Scene;
  renderer: WebGLRenderer;
  container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.camera = createCamera(container);
    this.scene = createScene("green");
    this.renderer = createRenderer(container);
    this.container.append(this.renderer.domElement);

    // eslint-disable-next-line
    const resizer = new Resizer(container, this.camera, this.renderer);
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
}

export { World };
