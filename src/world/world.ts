import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createBox, createCube } from "./components/box";
import { createCamera } from "./components/camera";
import { createDodecahedron } from "./components/dodecahedron";
import { createIcosahedron } from "./components/icosahedron";
import { createScene } from "./components/scene";
import { createSphere } from "./components/sphere";
import { createTetrahedron } from "./components/tertrahedron";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

/* 
Scoping values here makes them unaccessible to outside the module.
That that way only one world class can be instantianted
since the second World object would use same property values
as the first object.
*/
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;
let scene: Scene;

interface World {
  constructor(container: HTMLElement): void
  generateShapes(): void
  render(): void
  destroy(): void
  getAll(): void
}

class World implements World {
  constructor(container: HTMLElement) {
    camera = createCamera(container);
    scene = createScene("green");
    renderer = createRenderer(container);
    container.append(renderer.domElement);

    const resizer = new Resizer(container, camera, renderer);
  }

  generateShapes() {
    let shapes = []
    shapes.push(createCube())
    shapes.push(createBox({ width: 3, height: 1, depth: 2 }, { x: 3, y: 0, z: 0 }));
    shapes.push(createTetrahedron(undefined, { x: -3, y: -2, z: -4 }));
    shapes.push(createIcosahedron(undefined, { x: -4, y: 2, z: 0 }))
    shapes.push(createSphere({ radius: 1, widthSegments: 16, heightSegments: 16 }, { x: 0.5, y: 2, z: 0 }))
    shapes.push(createDodecahedron(undefined, { x: -3, y: 2, z: -3 }))

    // Add every shape to scene
    shapes.forEach((shape) => {
      scene.add(shape)
    });
  }

  render(): void {
    renderer.render(scene, camera);
  }

  destroy(): void {
    renderer.dispose();
  }
}

export { World }